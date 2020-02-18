import { IsString, IsNumber } from 'class-validator';
 
class CreateUserDto {
   @IsNumber()
   public id: number;

  @IsString()
  public name: string;
 
  @IsString()
  public lastname: string;
 
  @IsString()
  public password: string;
}
 
export default CreateUserDto;