import {IsBoolean} from 'class-validator';

class UpdateNotificationPreferenceDto {
    @IsBoolean()
    emailProductUpdatesEnabled: boolean;
    
    @IsBoolean()
    emailSecurityUpdatesEnabled: boolean;
  
    @IsBoolean()
    smsEnabled: boolean;
  
    @IsBoolean()
    inAppEnabled: boolean;
  }
  
  export default UpdateNotificationPreferenceDto;
