function StopWatch() {
    let startCount = 1;
    let stopCount = 1;

    this.start = function() {
        // console.log("stop watch started");
        if (!startCount > 0)
            throw new Error("Already started")
        startCount--;
    };
    let currentStartTime = Date();
    Object.defineProperty(this, 'currentStartTime', {
        get: function() {
            return currentStartTime;
        }
    });
    this.stop = function() {
        // console.log("stop watch stopped");
        if (!stopCount > 0)
            throw new Error("Already Stopped");
        stopCount--;
    };
    let currentStopTime = Date();
    Object.defineProperty(this, 'currentStopTime', )
    this.duration = function() {
        const duration = 1;
        return duration;
    };
    this.reset = function() {
        console.log('Reset All');
        startCount = 1;
        stopCount = 1;
    }
}

const sw = new StopWatch();