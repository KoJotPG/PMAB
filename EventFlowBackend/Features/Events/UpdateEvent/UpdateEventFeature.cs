using EventFlowBackend.Core.CQRS;
using EventFlowBackend.Core.Domain;
using EventFlowBackend.Core.Persistence;
using EventFlowBackend.Features.Events.Shared;

namespace EventFlowBackend.Features.Events.UpdateEvent;

public static class UpdateEventFeature
{
    public static RouteGroupBuilder MapUpdateEvent(this RouteGroupBuilder group)
    {
        group.MapPut(
            "/{id:guid}",
            async (Guid id, UpsertEventRequest request, UpdateEventHandler handler, CancellationToken ct) =>
            {
                var result = await handler.Handle(new UpdateEventCommand(id, request), ct);
                return result switch
                {
                    null => Results.NotFound(),
                    _ => Results.Ok(result),
                };
            });

        return group;
    }
}

public sealed record UpdateEventCommand(Guid Id, UpsertEventRequest Request) : ICommand<EventDto?>;

public sealed class UpdateEventHandler(IEventRepository repository)
    : ICommandHandler<UpdateEventCommand, EventDto?>
{
    public async Task<EventDto?> Handle(UpdateEventCommand command, CancellationToken cancellationToken)
    {
        var current = await repository.GetByIdAsync(command.Id, cancellationToken);
        if (current is null)
        {
            return null;
        }

        var updated = new EventItem
        {
            Id = command.Id,
            Title = command.Request.Title,
            Description = command.Request.Description,
            StartDateUtc = command.Request.StartDateUtc,
            EndDateUtc = command.Request.EndDateUtc,
            Location = command.Request.Location,
        };

        await repository.UpdateAsync(updated, cancellationToken);
        return updated.ToDto();
    }
}
