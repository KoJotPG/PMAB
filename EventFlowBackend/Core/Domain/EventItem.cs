namespace EventFlowBackend.Core.Domain;

public sealed class EventItem
{
    public Guid Id { get; init; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public DateTime StartDateUtc { get; set; }
    public DateTime EndDateUtc { get; set; }
    public string Location { get; set; } = string.Empty;
}
