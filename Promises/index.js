const states = {
    pending: 'Pending',
    resolved: 'Resolved',
    rejected: 'Rejected'
};

class John {
    constructor(promiseFn) {
        this.allCalls = []; 

        this.status = states.pending;

        const resolve = (value) => {
            this.status = states.resolved;
            this.value = value;
        }
        const reject = (value) => {
            this.status = states.rejected;
            this.value = value;
        }

        promiseFn(resolve, reject);
    }

    callLater =  callback => new John(resolve => this.allCalls.push(() => resolve(callback)));

    then(successFn){
        this.callLater((successFn)=>this.then)
    }

    catch(errorFn){
        errorFn(this.value);
    }
}
