using EventFlowBackend.Core.CQRS;
using EventFlowBackend.Core.Domain;
using EventFlowBackend.Core.Persistence;
using EventFlowBackend.Features.Events.Shared;

namespace EventFlowBackend.Features.Events.CreateEvent;

public static class CreateEventFeature
{
    public static RouteGroupBuilder MapCreateEvent(this RouteGroupBuilder group)
    {
        group.MapPost(
            "/",
            async (UpsertEventRequest request, CreateEventHandler handler, CancellationToken ct) =>
            {
                var response = await handler.Handle(new CreateEventCommand(request), ct);
                return Results.Created($"/api/events/{response.Id}", response);
            });

        return group;
    }
}

public sealed record CreateEventCommand(UpsertEventRequest Request) : ICommand<EventDto>;

public sealed class CreateEventHandler(IEventRepository repository)
    : ICommandHandler<CreateEventCommand, EventDto>
{
    public async Task<EventDto> Handle(CreateEventCommand command, CancellationToken cancellationToken)
    {
        var entity = new EventItem
        {
            Id = Guid.NewGuid(),
            Title = command.Request.Title,
            Description = command.Request.Description,
            StartDateUtc = command.Request.StartDateUtc,
            EndDateUtc = command.Request.EndDateUtc,
            Location = command.Request.Location,
        };

        var created = await repository.CreateAsync(entity, cancellationToken);
        return created.ToDto();
    }
}
