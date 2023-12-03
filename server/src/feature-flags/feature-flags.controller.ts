import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
    UseInterceptors,
  } from '@nestjs/common';
  import FeatureFlagsService from './feature-flags.service';
  import {JwtAuthenticationGuard } from '../auth/guards/jwt-auth.guard';
  import CreateFeatureFlagDto from './dto/createFeatureFlag.dto';
  import FindOneParams from '../utils/findOneParams';
  import UpdateFeatureFlagDto from './dto/updateFeatureFlag.dto';
  
  @Controller('feature-flags')
  @UseInterceptors(ClassSerializerInterceptor)
  export default class FeatureFlagsController {
    constructor(private readonly featureFlagsService: FeatureFlagsService) {}
  
    @Get()
    getAll() {
      return this.featureFlagsService.getAll();
    }
  
    @Post('create')
    @UseGuards(JwtAuthenticationGuard )
    async create(@Body() featureFlag: CreateFeatureFlagDto) {
      return this.featureFlagsService.create(featureFlag);
    }
  
    @Patch(':id')
    @UseGuards(JwtAuthenticationGuard )
    async updateCategory(
      @Param() { id }: FindOneParams,
      @Body() category: UpdateFeatureFlagDto,
    ) {
      return this.featureFlagsService.update(id, category);
    }
  
    @Delete(':id')
    @UseGuards(JwtAuthenticationGuard )
    async deleteCategory(@Param() { id }: FindOneParams) {
      return this.featureFlagsService.delete(id);
    }
  }