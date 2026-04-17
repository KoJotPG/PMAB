using System.Collections.Concurrent;
using EventFlowBackend.Core.Domain;

namespace EventFlowBackend.Core.Persistence;

public sealed class InMemoryEventRepository : IEventRepository
{
    private readonly ConcurrentDictionary<Guid, EventItem> _storage = new();

    public Task<IReadOnlyCollection<EventItem>> GetAllAsync(CancellationToken cancellationToken)
    {
        IReadOnlyCollection<EventItem> result = _storage.Values
            .OrderBy(x => x.StartDateUtc)
            .ToArray();

        return Task.FromResult(result);
    }

    public Task<EventItem?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
    {
        _storage.TryGetValue(id, out var entity);
        return Task.FromResult(entity);
    }

    public Task<EventItem> CreateAsync(EventItem entity, CancellationToken cancellationToken)
    {
        _storage[entity.Id] = entity;
        return Task.FromResult(entity);
    }

    public Task<bool> UpdateAsync(EventItem entity, CancellationToken cancellationToken)
    {
        if (!_storage.ContainsKey(entity.Id))
        {
            return Task.FromResult(false);
        }

        _storage[entity.Id] = entity;
        return Task.FromResult(true);
    }

    public Task<bool> DeleteAsync(Guid id, CancellationToken cancellationToken)
    {
        return Task.FromResult(_storage.TryRemove(id, out _));
    }
}
