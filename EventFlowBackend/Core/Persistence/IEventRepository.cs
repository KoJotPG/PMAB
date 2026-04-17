using EventFlowBackend.Core.Domain;

namespace EventFlowBackend.Core.Persistence;

public interface IEventRepository
{
    Task<IReadOnlyCollection<EventItem>> GetAllAsync(CancellationToken cancellationToken);
    Task<EventItem?> GetByIdAsync(Guid id, CancellationToken cancellationToken);
    Task<EventItem> CreateAsync(EventItem entity, CancellationToken cancellationToken);
    Task<bool> UpdateAsync(EventItem entity, CancellationToken cancellationToken);
    Task<bool> DeleteAsync(Guid id, CancellationToken cancellationToken);
}
