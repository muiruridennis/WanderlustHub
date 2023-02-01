import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
 
class SearchClientsQuery {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  search?: string;
}
 
export default SearchClientsQuery;