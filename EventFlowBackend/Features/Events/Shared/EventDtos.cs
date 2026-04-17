using EventFlowBackend.Core.Domain;

namespace EventFlowBackend.Features.Events.Shared;

public sealed record EventDto(
    Guid Id,
    string Title,
    string Description,
    DateTime StartDateUtc,
    DateTime EndDateUtc,
    string Location);

public sealed record UpsertEventRequest(
    string Title,
    string Description,
    DateTime StartDateUtc,
    DateTime EndDateUtc,
    string Location);

public static class EventMapping
{
    public static EventDto ToDto(this EventItem item) =>
        new(
            item.Id,
            item.Title,
            item.Description,
            item.StartDateUtc,
            item.EndDateUtc,
            item.Location);
}
