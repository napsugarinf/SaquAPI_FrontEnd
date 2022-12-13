export class RoomDataPic {
    //key: string | undefined
    roomNumber: number
    coldWater: number 
    hotWater: number 
    base64StringImage : string;

    constructor( roomNumber: number= 0, coldWater: number = 0, hotWater: number = 0, base64StringImage: string = '') {
        this.roomNumber = roomNumber;
        this.coldWater = coldWater;
        this.hotWater = hotWater;
        this.base64StringImage = base64StringImage;
              }
}

