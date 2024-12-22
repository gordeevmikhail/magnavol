class Signal {
    constructor(name, rename) {
        this.name = name;
        this.rename = rename;
    }

    static fromName(rename, signalName) {
        // Logic to create or retrieve an object based on signalName
        // For simplicity, let's assume a predefined mapping or a switch case

        let name;
        switch (signalName) {
            case 'signalA':
                name = 'Signal A';
                break;
            case 'signalB':
                name = 'Signal B';
                break;
            default:
                name = 'Unknown Signal';
                break;
        }

        return new Signal(name, rename);
    }
}

// Usage example
const signal1 = Signal.fromName('Renamed Signal 1', 'signalA');
console.log(signal1); // Output: Signal { name: 'Signal A', rename: 'Renamed Signal 1' }

const signal2 = Signal.fromName('Renamed Signal 2', 'signalB');
console.log(signal2); // Output: Signal { name: 'Signal B', rename: 'Renamed Signal 2' }

const unknownSignal = Signal.fromName('Unknown Rename', 'unknownSignal');
console.log(unknownSignal); // Output: Signal { name: 'Unknown Signal', rename: 'Unknown Rename' }
