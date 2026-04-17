using EventFlowBackend.Core.CQRS;
using EventFlowBackend.Core.Persistence;
using EventFlowBackend.Features.Events.Shared;

namespace EventFlowBackend.Features.Events.GetAllEvents;

public static class GetAllEventsFeature
{
    public static RouteGroupBuilder MapGetAllEvents(this RouteGroupBuilder group)
    {
        group.MapGet(
            "/",
            async (GetAllEventsHandler handler, CancellationToken ct) =>
            {
                var response = await handler.Handle(new GetAllEventsQuery(), ct);
                return Results.Ok(response);
            });

        return group;
    }
}

public sealed record GetAllEventsQuery : IQuery<IReadOnlyCollection<EventDto>>;

public sealed class GetAllEventsHandler(IEventRepository repository)
    : IQueryHandler<GetAllEventsQuery, IReadOnlyCollection<EventDto>>
{
    public async Task<IReadOnlyCollection<EventDto>> Handle(
        GetAllEventsQuery query,
        CancellationToken cancellationToken)
    {
        var items = await repository.GetAllAsync(cancellationToken);
        return items.Select(x => x.ToDto()).ToArray();
    }
}
