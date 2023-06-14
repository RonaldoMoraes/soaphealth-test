"use strict";
process.env.DATABASE_URL = process.env.TEST_DATABASE_URL || 'file:./test.sqlite';
process.env.NODE_ENV = 'test';
//# sourceMappingURL=setup.js.map