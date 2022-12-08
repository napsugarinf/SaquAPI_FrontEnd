export class RoomDataPic {
    key: string | undefined
    roomNumber: number | undefined
    coldWater: number | undefined
    hotWater: number | undefined
    fileInputStream: string | ArrayBuffer | null;

    constructor(key: string = '', roomNumber: number = 0, coldWater: number = 0, hotWater: number = 0, fileInputStream = null) {
        this.key = key;
        this.roomNumber = roomNumber;
        this.coldWater = coldWater;
        this.hotWater = hotWater;
        this.fileInputStream = fileInputStream;
      }
}

