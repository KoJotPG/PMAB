using EventFlowBackend.Core.CQRS;
using EventFlowBackend.Core.Persistence;

namespace EventFlowBackend.Features.Events.DeleteEvent;

public static class DeleteEventFeature
{
    public static RouteGroupBuilder MapDeleteEvent(this RouteGroupBuilder group)
    {
        group.MapDelete(
            "/{id:guid}",
            async (Guid id, DeleteEventHandler handler, CancellationToken ct) =>
            {
                var deleted = await handler.Handle(new DeleteEventCommand(id), ct);
                return deleted ? Results.NoContent() : Results.NotFound();
            });

        return group;
    }
}

public sealed record DeleteEventCommand(Guid Id) : ICommand<bool>;

public sealed class DeleteEventHandler(IEventRepository repository)
    : ICommandHandler<DeleteEventCommand, bool>
{
    public Task<bool> Handle(DeleteEventCommand command, CancellationToken cancellationToken)
    {
        return repository.DeleteAsync(command.Id, cancellationToken);
    }
}
