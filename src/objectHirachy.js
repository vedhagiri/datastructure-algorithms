// [1,2,3][-1]==3 (or just use .slice(-1)[0])
if (![1][-1])
    Object.defineProperty(Array.prototype, -1, {get() {return this[this.length-1]}}); //credit to caub

// WARNING: THIS XTREME™ RADICAL METHOD IS VERY INEFFICIENT,
// ESPECIALLY IF INDEXING INTO MULTIPLE OBJECTS,
// because you are constantly creating wrapper objects on-the-fly and,
// even worse, going through Proxy i.e. runtime ~reflection, which prevents
// compiler optimization

// Proxy handler to override obj[*]/obj.* and obj[*]=...
var hyperIndexProxyHandler = {
    get: function(obj,key, proxy) {
        return key.split('.').reduce((o,i)=>o[i], obj);
    },
    set: function(obj,key,value, proxy) {
        var keys = key.split('.');
        var beforeLast = keys.slice(0,-1).reduce((o,i)=>o[i], obj);
        beforeLast[keys[-1]] = value;
    },
    has: function(obj,key) {
        //etc
    }
};
function hyperIndexOf(target) {
    return new Proxy(target, hyperIndexProxyHandler);
}
var obj = {a:{b:{c:1, d:2}}};
console.log("obj is:", JSON.stringify(obj));

var objHyper = hyperIndexOf(obj);
console.log("(proxy override get) objHyper['a.b.c'] is:", objHyper['a.b.c']);
objHyper['a.b.c'] = 3;
console.log("(proxy override set) objHyper['a.b.c']=3, now obj is:", JSON.stringify(obj));

console.log("(behind the scenes) objHyper is:", objHyper);

if (!({}).H)
    Object.defineProperties(Object.prototype, {
        H: {
            get: function() {
                return hyperIndexOf(this); // TODO:cache as a non-enumerable property for efficiency?
            }
        }
    });

console.log("(shortcut) obj.H['a.b.c']=4");
obj.H['a.b.c'] = 4;
console.log("(shortcut) obj.H['a.b.c'] is obj['a']['b']['c'] is", obj.H['a.b.c']);