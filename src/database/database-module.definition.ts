import { ConfigurableModuleBuilder } from '@nestjs/common';
import DatabaseOptions from './interface/databaseOption';

export const CONNECTION_POOL = 'connection_pool';

export const {
  ConfigurableModuleClass: ConfigurableDatabaseModule,
  MODULE_OPTIONS_TOKEN: DATABASE_OPTIONS,
} = new ConfigurableModuleBuilder<DatabaseOptions>()
  .setClassMethodName('forRoot')
  .build();
