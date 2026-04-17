using EventFlowBackend.Core.CQRS;
using EventFlowBackend.Core.Persistence;
using EventFlowBackend.Features.Events.Shared;

namespace EventFlowBackend.Features.Events.GetEventById;

public static class GetEventByIdFeature
{
    public static RouteGroupBuilder MapGetEventById(this RouteGroupBuilder group)
    {
        group.MapGet(
            "/{id:guid}",
            async (Guid id, GetEventByIdHandler handler, CancellationToken ct) =>
            {
                var response = await handler.Handle(new GetEventByIdQuery(id), ct);
                return response is null ? Results.NotFound() : Results.Ok(response);
            });

        return group;
    }
}

public sealed record GetEventByIdQuery(Guid Id) : IQuery<EventDto?>;

public sealed class GetEventByIdHandler(IEventRepository repository)
    : IQueryHandler<GetEventByIdQuery, EventDto?>
{
    public async Task<EventDto?> Handle(GetEventByIdQuery query, CancellationToken cancellationToken)
    {
        var item = await repository.GetByIdAsync(query.Id, cancellationToken);
        return item?.ToDto();
    }
}
