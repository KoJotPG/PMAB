using EventFlowBackend.Core.Persistence;
using EventFlowBackend.Features.Events.CreateEvent;
using EventFlowBackend.Features.Events.DeleteEvent;
using EventFlowBackend.Features.Events.GetAllEvents;
using EventFlowBackend.Features.Events.GetEventById;
using EventFlowBackend.Features.Events.UpdateEvent;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddSingleton<IEventRepository, InMemoryEventRepository>();
builder.Services.AddScoped<CreateEventHandler>();
builder.Services.AddScoped<GetAllEventsHandler>();
builder.Services.AddScoped<GetEventByIdHandler>();
builder.Services.AddScoped<UpdateEventHandler>();
builder.Services.AddScoped<DeleteEventHandler>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

var eventsGroup = app.MapGroup("/api/events").WithTags("Events");
eventsGroup.MapCreateEvent();
eventsGroup.MapGetAllEvents();
eventsGroup.MapGetEventById();
eventsGroup.MapUpdateEvent();
eventsGroup.MapDeleteEvent();

app.Run();
