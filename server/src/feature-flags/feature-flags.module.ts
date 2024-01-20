import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import FeatureFlag from './entity/featureFlag.entity';
import FeatureFlagsService from './feature-flags.service';
import FeatureFlagsController from './feature-flags.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FeatureFlag])],
  controllers: [FeatureFlagsController],
  providers: [FeatureFlagsService],
  exports: [FeatureFlagsService],
})
export class FeatureFlagsModule {}