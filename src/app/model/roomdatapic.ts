export class RoomDataPic {
    //key: string | undefined
    roomNumber: string
    coldWater: number 
    hotWater: number 


    constructor( roomNumber: string= '', coldWater: number = 0, hotWater: number = 0) {
        this.roomNumber = roomNumber;
        this.coldWater = coldWater;
        this.hotWater = hotWater;
              }
}

