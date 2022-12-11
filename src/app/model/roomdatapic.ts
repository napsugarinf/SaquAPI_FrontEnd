export class RoomDataPic {
    //key: string | undefined
    roomNumber: number
    coldWater: number 
    hotWater: number 


    constructor( roomNumber: number = 0, coldWater: number = 0, hotWater: number = 0) {
        this.roomNumber = roomNumber;
        this.coldWater = coldWater;
        this.hotWater = hotWater;
              }
}

