define(function () {
    class Loop {
        lastTime = 0;
        callback = function () {};
        frame = this.frame.bind(this);
        requestId;

        start(callback) {
            if (this.requestId)
                this.stop();
            this.callback = callback;
            this.requestId = requestAnimationFrame(this.frame);
        }

        stop() {
            if (this.requestId)
                cancelAnimationFrame(this.requestId);
        }

        frame(time) {
            let seconds = (time - this.lastTime) / 1000;
            this.lastTime = time;
            if (seconds < 0.2) {
                this.callback(seconds);
            }
            this.requestId = requestAnimationFrame(this.frame);
        }
    }

    return {
        create: function () {
            return new Loop();
        }
    };
});