type numberOrString = number | string;

class Job {
  private _jobId: numberOrString;

  constructor(jobId: numberOrString) {
    this._jobId = jobId;
  }

  get jobId(): numberOrString {
    return this._jobId;
  }

  set jobId(newId: numberOrString) {
    if (typeof newId === 'number' || typeof newId === 'string') {
      this._jobId = newId;
    } else {
      throw new Error('Job ID must be a number or a string');
    }
  }

  // Additional method to display job ID info
  displayJobIdInfo(): void {
    console.log(`The job ID is currently set to: ${this._jobId}`);
  }
}

// Usage
let job_id: numberOrString = '1234';
let job = new Job(job_id);
job.displayJobIdInfo();

// Update job ID
job.jobId = 5678;
job.displayJobIdInfo();
