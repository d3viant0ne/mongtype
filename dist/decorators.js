"use strict";
const types_1 = require("./types");
function Collection(props) {
    return function (target) {
        Reflect.defineMetadata(types_1.NAME_KEY, props.name, target.prototype);
    };
}
exports.Collection = Collection;
function Before(...events) {
    return function (target, name, descriptor) {
        for (const event of events) {
            const fns = Reflect.getMetadata(`${types_1.PRE_KEY}_${event}`, target) || [];
            fns.push(target[name].bind(target));
            Reflect.defineMetadata(`${types_1.PRE_KEY}_${event}`, fns, target);
        }
    };
}
exports.Before = Before;
function After(...events) {
    return function (target, name, descriptor) {
        for (const event of events) {
            const fns = Reflect.getMetadata(`${types_1.POST_KEY}_${event}`, target) || [];
            fns.push(target[name].bind(target));
            Reflect.defineMetadata(`${types_1.POST_KEY}_${event}`, fns, target);
        }
    };
}
exports.After = After;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQ0FBdUU7QUFFdkUsb0JBQTJCLEtBQXNCO0lBQy9DLE1BQU0sQ0FBQyxVQUFTLE1BQVc7UUFDekIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxnQkFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pFLENBQUMsQ0FBQztBQUNKLENBQUM7QUFKRCxnQ0FJQztBQUVELGdCQUF1QixHQUFHLE1BQWdCO0lBQ3hDLE1BQU0sQ0FBQyxVQUFTLE1BQVcsRUFBRSxJQUFZLEVBQUUsVUFBd0M7UUFDakYsR0FBRyxDQUFBLENBQUMsTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsZUFBTyxJQUFJLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsZUFBTyxJQUFJLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RCxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVJELHdCQVFDO0FBRUQsZUFBc0IsR0FBRyxNQUFnQjtJQUN2QyxNQUFNLENBQUMsVUFBUyxNQUFXLEVBQUUsSUFBWSxFQUFFLFVBQXdDO1FBQ2pGLEdBQUcsQ0FBQSxDQUFDLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLGdCQUFRLElBQUksS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxnQkFBUSxJQUFJLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5RCxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVJELHNCQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTkFNRV9LRVksIFBSRV9LRVksIFBPU1RfS0VZLCBDb2xsZWN0aW9uUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIENvbGxlY3Rpb24ocHJvcHM6IENvbGxlY3Rpb25Qcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBhbnkpIHtcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKE5BTUVfS0VZLCBwcm9wcy5uYW1lLCB0YXJnZXQucHJvdG90eXBlKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJlZm9yZSguLi5ldmVudHM6IHN0cmluZ1tdKSB7XG4gIHJldHVybiBmdW5jdGlvbih0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nLCBkZXNjcmlwdG9yOiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxhbnk+KSB7XG4gICAgZm9yKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgY29uc3QgZm5zID0gUmVmbGVjdC5nZXRNZXRhZGF0YShgJHtQUkVfS0VZfV8ke2V2ZW50fWAsIHRhcmdldCkgfHwgW107XG4gICAgICBmbnMucHVzaCh0YXJnZXRbbmFtZV0uYmluZCh0YXJnZXQpKTtcbiAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoYCR7UFJFX0tFWX1fJHtldmVudH1gLCBmbnMsIHRhcmdldCk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQWZ0ZXIoLi4uZXZlbnRzOiBzdHJpbmdbXSkge1xuICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZywgZGVzY3JpcHRvcjogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8YW55Pikge1xuICAgIGZvcihjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIGNvbnN0IGZucyA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoYCR7UE9TVF9LRVl9XyR7ZXZlbnR9YCwgdGFyZ2V0KSB8fCBbXTtcbiAgICAgIGZucy5wdXNoKHRhcmdldFtuYW1lXS5iaW5kKHRhcmdldCkpO1xuICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShgJHtQT1NUX0tFWX1fJHtldmVudH1gLCBmbnMsIHRhcmdldCk7XG4gICAgfVxuICB9O1xufVxuIl19