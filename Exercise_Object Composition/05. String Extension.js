(function () {
    String.prototype.ensureStart = function(x) {
        if (!this.startsWith(x)) {
            return x + this.toString();
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function(x) {
        if (!this.endsWith(x)) {
            return this.toString() + x;
        }

        return this.toString();
    };

    String.prototype.isEmpty = function() {
        return this.length === 0;
    };

    String.prototype.truncate = function(n) {
        const ellipsis = '...';

        if (this.toString().length <= n) {
            return this.toString();
        }

        if (n < 4) {
            return ellipsis.slice(0, n);
        }

        if (!this.toString().includes(' ')) {
            return this.toString().slice(0, n - 3) + ellipsis;
        }

        let currentString = this.toString();

        while (currentString.length + ellipsis.length > n) {
            let words = currentString.split(' ');
            words.pop();
            currentString = words.join(' ');
        }

        return currentString + ellipsis;
    };

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }

        return string;
    };
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
  console.log(str);
str = String.format('jumps {0} {1}',
  'dog');
  console.log(str);
