class Time {
    getDate() {
        let d = new Date();
        let time = d.toLocaleTimeString();

        document.getElementById('time').innerHTML = time;        
    }

    render () {
        setInterval(this.getDate, 0);
    }
}

export default Time;


