export class Diagnosis {
    info:string;
    code:string;
    removed:boolean;
    addedDate:string;
    patientId : number;
    removedDate:string;
    constructor(info:string,
                code:string,
                patientId: number,
                removed:boolean = false,
                addedDate:string = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
                removedDate:string = '', ) {
        this.info = info;
        this.code = code;
        this.addedDate = addedDate;
        this.patientId = patientId;
        this.removed = removed;
        this.removedDate = removedDate;
    }
}
