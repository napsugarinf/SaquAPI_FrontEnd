export class RoomDataPic {
    //key: string | undefined
    roomNumber: number | undefined
    coldWater: number | undefined
    hotWater: number | undefined
    fileInputStream:  ArrayBuffer | null;

    constructor( roomNumber: number = 0, coldWater: number = 0, hotWater: number = 0, fileInputStream = null) {
        this.roomNumber = roomNumber;
        this.coldWater = coldWater;
        this.hotWater = hotWater;
        this.fileInputStream = fileInputStream;
      }
}

