/**
Filter object keys and values into a new object.

@param object - Source object to filter properties from.
@param predicate - Predicate function that detemines whether a property should be assigned to the new object.
@param includeKeys - Property names that should be assigned to the new object.

@example
```
import filterObject = require('filter-obj');

const object = {
	foo: true,
	bar: false
};

const newObject = filterObject(object, (key, value) => value === true);
//=> {foo: true}

const newObject2 = filterObject(object, ['bar']);
//=> {bar: false}
```
*/
declare function filterObject<ObjectType extends {[key: string]: any}>(
	object: ObjectType,
	predicate: (
		key: keyof ObjectType,
		value: ObjectType[keyof ObjectType]
	) => boolean
): Partial<ObjectType>;
declare function filterObject<
	ObjectType extends {[key: string]: any},
	IncludedKeys extends keyof ObjectType
>(
	object: ObjectType,
	includeKeys: ReadonlyArray<IncludedKeys>
): Pick<ObjectType, IncludedKeys>;

export = filterObject;
