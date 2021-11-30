class Sensor {
    constructor(name) {
        this.name = name;
        this.powerStatus = 'off';
        this.reportingInterval = 10000;
        this.status = 'idle';
    }

    turn = function (onOff) {
        if (onOff === 'on' && this.powerStatus === 'off') {
            this.powerStatus = 'on';
            setTimeout(() => {
                this.status = 'sensingDistance';
                setTimeout(() => {
                    this.status = 'reportingData';
                    setTimeout(() => {
                        this.status = 'idle';
                    }, 1000);
                }, 500);
            }, this.reportingInterval);
        } else if (onOff === 'on' && this.powerStatus === 'on') {
            throw new Error('Error');
        } else if (onOff === 'off' && this.powerStatus === 'on') {
            this.powerStatus = 'off';
        }
    };
}

class IotServer {
    constructor() {
        this.arr = [];
    }

    start = function (x) {
        this.arr = x;
    };
    publish = function (dataList) {
        if (this.arr[0].powerStatus === 'on') {
            dataList.deviceId = this.arr[0].name;
            dataList.actionId = dataList.actionId;
            this.arr[0].reportingInterval = dataList.payload;
        }
    };
}

module.exports = {
    Sensor,
    IotServer,
};
