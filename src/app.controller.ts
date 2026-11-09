import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
let user = [
  {
    id: 1,
    name: "Kayes",
    age: 26,
    address: {
      houseNo: 1,
      road: 12,
      city: "Rangpur"
    }
  },

  {
    id: 2,
    name: "Jasim",
    age: 25,
    address: {
      houseNo: 13,
      road: 2,
      city: "Dhaka"
    },
  },

  {
    id: 3,
    name: "Momin",
    age: 27,
    address: {
      houseNo: 14,
      road: 3,
      city: "Chittagong"
    }
  }

]


@Controller('user')
export class AppController {


  @Get()
  name(): any[] {
    return user;
  }

  @Get(':id')
  findById(@Param("id", ParseIntPipe) id: number): any {
    return user.find((user) => user.id === id);
  }

  @Post()
  kayes(@Body() data: any): string {
    user.push(data);
    user.sort((a, b) => a.id - b.id);
    return `User is added successfully`;
  }

  @Patch(":id")
  Sami(@Param("id", ParseIntPipe) id: number, @Body() updateDataOnly: any): string {
    const index = user.findIndex(user => user.id === id);
    user[index] = { ...user[index], ...updateDataOnly };
    return `User is updated`;
  }

  @Put(":id")
  jasim(@Param("id", ParseIntPipe) id: number, @Body() replacedData: any): string {
    const index = user.findIndex(user => user.id === id);
    user[index] = { id, ...replacedData };
    return `User replaced successfully`;
  }

  @Delete(`:id`)
  rahim(@Param("id", ParseIntPipe) id: number): string {
    const index = user.findIndex(user => user.id === id);
    user.splice(index, 1);
    return `Deleted successfully`;
  }



}


