export class BookingResponseDto {
  id: number;
  status: string;
  bookedAtDate: Date;
  user: {
    id: number;
    name: string;
  };
  tour: {
    id: number;
    name: string;
  };
  payments: {
    id: number;
    amountPaid: number;
  }[];
}

