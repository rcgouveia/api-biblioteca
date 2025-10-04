
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Bibliotecario
 * 
 */
export type Bibliotecario = $Result.DefaultSelection<Prisma.$BibliotecarioPayload>
/**
 * Model Livros
 * 
 */
export type Livros = $Result.DefaultSelection<Prisma.$LivrosPayload>
/**
 * Model Emprestimo
 * 
 */
export type Emprestimo = $Result.DefaultSelection<Prisma.$EmprestimoPayload>
/**
 * Model Reserva
 * 
 */
export type Reserva = $Result.DefaultSelection<Prisma.$ReservaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bibliotecario`: Exposes CRUD operations for the **Bibliotecario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bibliotecarios
    * const bibliotecarios = await prisma.bibliotecario.findMany()
    * ```
    */
  get bibliotecario(): Prisma.BibliotecarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livros`: Exposes CRUD operations for the **Livros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livros
    * const livros = await prisma.livros.findMany()
    * ```
    */
  get livros(): Prisma.LivrosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emprestimo`: Exposes CRUD operations for the **Emprestimo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emprestimos
    * const emprestimos = await prisma.emprestimo.findMany()
    * ```
    */
  get emprestimo(): Prisma.EmprestimoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **Reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.ReservaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Bibliotecario: 'Bibliotecario',
    Livros: 'Livros',
    Emprestimo: 'Emprestimo',
    Reserva: 'Reserva'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "bibliotecario" | "livros" | "emprestimo" | "reserva"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Bibliotecario: {
        payload: Prisma.$BibliotecarioPayload<ExtArgs>
        fields: Prisma.BibliotecarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BibliotecarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibliotecarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BibliotecarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibliotecarioPayload>
          }
          findFirst: {
            args: Prisma.BibliotecarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibliotecarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BibliotecarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibliotecarioPayload>
          }
          findMany: {
            args: Prisma.BibliotecarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibliotecarioPayload>[]
          }
          create: {
            args: Prisma.BibliotecarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibliotecarioPayload>
          }
          createMany: {
            args: Prisma.BibliotecarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BibliotecarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibliotecarioPayload>[]
          }
          delete: {
            args: Prisma.BibliotecarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibliotecarioPayload>
          }
          update: {
            args: Prisma.BibliotecarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibliotecarioPayload>
          }
          deleteMany: {
            args: Prisma.BibliotecarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BibliotecarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BibliotecarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibliotecarioPayload>[]
          }
          upsert: {
            args: Prisma.BibliotecarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BibliotecarioPayload>
          }
          aggregate: {
            args: Prisma.BibliotecarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBibliotecario>
          }
          groupBy: {
            args: Prisma.BibliotecarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<BibliotecarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.BibliotecarioCountArgs<ExtArgs>
            result: $Utils.Optional<BibliotecarioCountAggregateOutputType> | number
          }
        }
      }
      Livros: {
        payload: Prisma.$LivrosPayload<ExtArgs>
        fields: Prisma.LivrosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivrosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivrosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrosPayload>
          }
          findFirst: {
            args: Prisma.LivrosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivrosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrosPayload>
          }
          findMany: {
            args: Prisma.LivrosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrosPayload>[]
          }
          create: {
            args: Prisma.LivrosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrosPayload>
          }
          createMany: {
            args: Prisma.LivrosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LivrosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrosPayload>[]
          }
          delete: {
            args: Prisma.LivrosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrosPayload>
          }
          update: {
            args: Prisma.LivrosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrosPayload>
          }
          deleteMany: {
            args: Prisma.LivrosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivrosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LivrosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrosPayload>[]
          }
          upsert: {
            args: Prisma.LivrosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivrosPayload>
          }
          aggregate: {
            args: Prisma.LivrosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivros>
          }
          groupBy: {
            args: Prisma.LivrosGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivrosGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivrosCountArgs<ExtArgs>
            result: $Utils.Optional<LivrosCountAggregateOutputType> | number
          }
        }
      }
      Emprestimo: {
        payload: Prisma.$EmprestimoPayload<ExtArgs>
        fields: Prisma.EmprestimoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmprestimoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmprestimoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          findFirst: {
            args: Prisma.EmprestimoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmprestimoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          findMany: {
            args: Prisma.EmprestimoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>[]
          }
          create: {
            args: Prisma.EmprestimoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          createMany: {
            args: Prisma.EmprestimoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmprestimoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>[]
          }
          delete: {
            args: Prisma.EmprestimoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          update: {
            args: Prisma.EmprestimoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          deleteMany: {
            args: Prisma.EmprestimoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmprestimoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmprestimoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>[]
          }
          upsert: {
            args: Prisma.EmprestimoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestimoPayload>
          }
          aggregate: {
            args: Prisma.EmprestimoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmprestimo>
          }
          groupBy: {
            args: Prisma.EmprestimoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmprestimoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmprestimoCountArgs<ExtArgs>
            result: $Utils.Optional<EmprestimoCountAggregateOutputType> | number
          }
        }
      }
      Reserva: {
        payload: Prisma.$ReservaPayload<ExtArgs>
        fields: Prisma.ReservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findFirst: {
            args: Prisma.ReservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findMany: {
            args: Prisma.ReservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          create: {
            args: Prisma.ReservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          createMany: {
            args: Prisma.ReservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          delete: {
            args: Prisma.ReservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          update: {
            args: Prisma.ReservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          deleteMany: {
            args: Prisma.ReservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          upsert: {
            args: Prisma.ReservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.ReservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    bibliotecario?: BibliotecarioOmit
    livros?: LivrosOmit
    emprestimo?: EmprestimoOmit
    reserva?: ReservaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    emprestimos: number
    reservas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | ClienteCountOutputTypeCountEmprestimosArgs
    reservas?: boolean | ClienteCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Count Type BibliotecarioCountOutputType
   */

  export type BibliotecarioCountOutputType = {
    emprestimos: number
    reservas: number
  }

  export type BibliotecarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | BibliotecarioCountOutputTypeCountEmprestimosArgs
    reservas?: boolean | BibliotecarioCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * BibliotecarioCountOutputType without action
   */
  export type BibliotecarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibliotecarioCountOutputType
     */
    select?: BibliotecarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BibliotecarioCountOutputType without action
   */
  export type BibliotecarioCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
  }

  /**
   * BibliotecarioCountOutputType without action
   */
  export type BibliotecarioCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Count Type LivrosCountOutputType
   */

  export type LivrosCountOutputType = {
    emprestimos: number
    reservas: number
  }

  export type LivrosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | LivrosCountOutputTypeCountEmprestimosArgs
    reservas?: boolean | LivrosCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * LivrosCountOutputType without action
   */
  export type LivrosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivrosCountOutputType
     */
    select?: LivrosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LivrosCountOutputType without action
   */
  export type LivrosCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
  }

  /**
   * LivrosCountOutputType without action
   */
  export type LivrosCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    cpf: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emprestimos?: boolean | Cliente$emprestimosArgs<ExtArgs>
    reservas?: boolean | Cliente$reservasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "cpf" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | Cliente$emprestimosArgs<ExtArgs>
    reservas?: boolean | Cliente$reservasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      emprestimos: Prisma.$EmprestimoPayload<ExtArgs>[]
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      cpf: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprestimos<T extends Cliente$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservas<T extends Cliente$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly senha: FieldRef<"Cliente", 'String'>
    readonly cpf: FieldRef<"Cliente", 'String'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.emprestimos
   */
  export type Cliente$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    cursor?: EmprestimoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Cliente.reservas
   */
  export type Cliente$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Bibliotecario
   */

  export type AggregateBibliotecario = {
    _count: BibliotecarioCountAggregateOutputType | null
    _avg: BibliotecarioAvgAggregateOutputType | null
    _sum: BibliotecarioSumAggregateOutputType | null
    _min: BibliotecarioMinAggregateOutputType | null
    _max: BibliotecarioMaxAggregateOutputType | null
  }

  export type BibliotecarioAvgAggregateOutputType = {
    id: number | null
  }

  export type BibliotecarioSumAggregateOutputType = {
    id: number | null
  }

  export type BibliotecarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BibliotecarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    cpf: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BibliotecarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    cpf: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BibliotecarioAvgAggregateInputType = {
    id?: true
  }

  export type BibliotecarioSumAggregateInputType = {
    id?: true
  }

  export type BibliotecarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BibliotecarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BibliotecarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    cpf?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BibliotecarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bibliotecario to aggregate.
     */
    where?: BibliotecarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bibliotecarios to fetch.
     */
    orderBy?: BibliotecarioOrderByWithRelationInput | BibliotecarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BibliotecarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bibliotecarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bibliotecarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bibliotecarios
    **/
    _count?: true | BibliotecarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BibliotecarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BibliotecarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BibliotecarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BibliotecarioMaxAggregateInputType
  }

  export type GetBibliotecarioAggregateType<T extends BibliotecarioAggregateArgs> = {
        [P in keyof T & keyof AggregateBibliotecario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBibliotecario[P]>
      : GetScalarType<T[P], AggregateBibliotecario[P]>
  }




  export type BibliotecarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BibliotecarioWhereInput
    orderBy?: BibliotecarioOrderByWithAggregationInput | BibliotecarioOrderByWithAggregationInput[]
    by: BibliotecarioScalarFieldEnum[] | BibliotecarioScalarFieldEnum
    having?: BibliotecarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BibliotecarioCountAggregateInputType | true
    _avg?: BibliotecarioAvgAggregateInputType
    _sum?: BibliotecarioSumAggregateInputType
    _min?: BibliotecarioMinAggregateInputType
    _max?: BibliotecarioMaxAggregateInputType
  }

  export type BibliotecarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt: Date
    updatedAt: Date
    _count: BibliotecarioCountAggregateOutputType | null
    _avg: BibliotecarioAvgAggregateOutputType | null
    _sum: BibliotecarioSumAggregateOutputType | null
    _min: BibliotecarioMinAggregateOutputType | null
    _max: BibliotecarioMaxAggregateOutputType | null
  }

  type GetBibliotecarioGroupByPayload<T extends BibliotecarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BibliotecarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BibliotecarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BibliotecarioGroupByOutputType[P]>
            : GetScalarType<T[P], BibliotecarioGroupByOutputType[P]>
        }
      >
    >


  export type BibliotecarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emprestimos?: boolean | Bibliotecario$emprestimosArgs<ExtArgs>
    reservas?: boolean | Bibliotecario$reservasArgs<ExtArgs>
    _count?: boolean | BibliotecarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bibliotecario"]>

  export type BibliotecarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bibliotecario"]>

  export type BibliotecarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bibliotecario"]>

  export type BibliotecarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cpf?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BibliotecarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "cpf" | "createdAt" | "updatedAt", ExtArgs["result"]["bibliotecario"]>
  export type BibliotecarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | Bibliotecario$emprestimosArgs<ExtArgs>
    reservas?: boolean | Bibliotecario$reservasArgs<ExtArgs>
    _count?: boolean | BibliotecarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BibliotecarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BibliotecarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BibliotecarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bibliotecario"
    objects: {
      emprestimos: Prisma.$EmprestimoPayload<ExtArgs>[]
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      cpf: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bibliotecario"]>
    composites: {}
  }

  type BibliotecarioGetPayload<S extends boolean | null | undefined | BibliotecarioDefaultArgs> = $Result.GetResult<Prisma.$BibliotecarioPayload, S>

  type BibliotecarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BibliotecarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BibliotecarioCountAggregateInputType | true
    }

  export interface BibliotecarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bibliotecario'], meta: { name: 'Bibliotecario' } }
    /**
     * Find zero or one Bibliotecario that matches the filter.
     * @param {BibliotecarioFindUniqueArgs} args - Arguments to find a Bibliotecario
     * @example
     * // Get one Bibliotecario
     * const bibliotecario = await prisma.bibliotecario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BibliotecarioFindUniqueArgs>(args: SelectSubset<T, BibliotecarioFindUniqueArgs<ExtArgs>>): Prisma__BibliotecarioClient<$Result.GetResult<Prisma.$BibliotecarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bibliotecario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BibliotecarioFindUniqueOrThrowArgs} args - Arguments to find a Bibliotecario
     * @example
     * // Get one Bibliotecario
     * const bibliotecario = await prisma.bibliotecario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BibliotecarioFindUniqueOrThrowArgs>(args: SelectSubset<T, BibliotecarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BibliotecarioClient<$Result.GetResult<Prisma.$BibliotecarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bibliotecario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliotecarioFindFirstArgs} args - Arguments to find a Bibliotecario
     * @example
     * // Get one Bibliotecario
     * const bibliotecario = await prisma.bibliotecario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BibliotecarioFindFirstArgs>(args?: SelectSubset<T, BibliotecarioFindFirstArgs<ExtArgs>>): Prisma__BibliotecarioClient<$Result.GetResult<Prisma.$BibliotecarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bibliotecario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliotecarioFindFirstOrThrowArgs} args - Arguments to find a Bibliotecario
     * @example
     * // Get one Bibliotecario
     * const bibliotecario = await prisma.bibliotecario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BibliotecarioFindFirstOrThrowArgs>(args?: SelectSubset<T, BibliotecarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__BibliotecarioClient<$Result.GetResult<Prisma.$BibliotecarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bibliotecarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliotecarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bibliotecarios
     * const bibliotecarios = await prisma.bibliotecario.findMany()
     * 
     * // Get first 10 Bibliotecarios
     * const bibliotecarios = await prisma.bibliotecario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bibliotecarioWithIdOnly = await prisma.bibliotecario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BibliotecarioFindManyArgs>(args?: SelectSubset<T, BibliotecarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BibliotecarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bibliotecario.
     * @param {BibliotecarioCreateArgs} args - Arguments to create a Bibliotecario.
     * @example
     * // Create one Bibliotecario
     * const Bibliotecario = await prisma.bibliotecario.create({
     *   data: {
     *     // ... data to create a Bibliotecario
     *   }
     * })
     * 
     */
    create<T extends BibliotecarioCreateArgs>(args: SelectSubset<T, BibliotecarioCreateArgs<ExtArgs>>): Prisma__BibliotecarioClient<$Result.GetResult<Prisma.$BibliotecarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bibliotecarios.
     * @param {BibliotecarioCreateManyArgs} args - Arguments to create many Bibliotecarios.
     * @example
     * // Create many Bibliotecarios
     * const bibliotecario = await prisma.bibliotecario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BibliotecarioCreateManyArgs>(args?: SelectSubset<T, BibliotecarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bibliotecarios and returns the data saved in the database.
     * @param {BibliotecarioCreateManyAndReturnArgs} args - Arguments to create many Bibliotecarios.
     * @example
     * // Create many Bibliotecarios
     * const bibliotecario = await prisma.bibliotecario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bibliotecarios and only return the `id`
     * const bibliotecarioWithIdOnly = await prisma.bibliotecario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BibliotecarioCreateManyAndReturnArgs>(args?: SelectSubset<T, BibliotecarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BibliotecarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bibliotecario.
     * @param {BibliotecarioDeleteArgs} args - Arguments to delete one Bibliotecario.
     * @example
     * // Delete one Bibliotecario
     * const Bibliotecario = await prisma.bibliotecario.delete({
     *   where: {
     *     // ... filter to delete one Bibliotecario
     *   }
     * })
     * 
     */
    delete<T extends BibliotecarioDeleteArgs>(args: SelectSubset<T, BibliotecarioDeleteArgs<ExtArgs>>): Prisma__BibliotecarioClient<$Result.GetResult<Prisma.$BibliotecarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bibliotecario.
     * @param {BibliotecarioUpdateArgs} args - Arguments to update one Bibliotecario.
     * @example
     * // Update one Bibliotecario
     * const bibliotecario = await prisma.bibliotecario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BibliotecarioUpdateArgs>(args: SelectSubset<T, BibliotecarioUpdateArgs<ExtArgs>>): Prisma__BibliotecarioClient<$Result.GetResult<Prisma.$BibliotecarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bibliotecarios.
     * @param {BibliotecarioDeleteManyArgs} args - Arguments to filter Bibliotecarios to delete.
     * @example
     * // Delete a few Bibliotecarios
     * const { count } = await prisma.bibliotecario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BibliotecarioDeleteManyArgs>(args?: SelectSubset<T, BibliotecarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bibliotecarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliotecarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bibliotecarios
     * const bibliotecario = await prisma.bibliotecario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BibliotecarioUpdateManyArgs>(args: SelectSubset<T, BibliotecarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bibliotecarios and returns the data updated in the database.
     * @param {BibliotecarioUpdateManyAndReturnArgs} args - Arguments to update many Bibliotecarios.
     * @example
     * // Update many Bibliotecarios
     * const bibliotecario = await prisma.bibliotecario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bibliotecarios and only return the `id`
     * const bibliotecarioWithIdOnly = await prisma.bibliotecario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BibliotecarioUpdateManyAndReturnArgs>(args: SelectSubset<T, BibliotecarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BibliotecarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bibliotecario.
     * @param {BibliotecarioUpsertArgs} args - Arguments to update or create a Bibliotecario.
     * @example
     * // Update or create a Bibliotecario
     * const bibliotecario = await prisma.bibliotecario.upsert({
     *   create: {
     *     // ... data to create a Bibliotecario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bibliotecario we want to update
     *   }
     * })
     */
    upsert<T extends BibliotecarioUpsertArgs>(args: SelectSubset<T, BibliotecarioUpsertArgs<ExtArgs>>): Prisma__BibliotecarioClient<$Result.GetResult<Prisma.$BibliotecarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bibliotecarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliotecarioCountArgs} args - Arguments to filter Bibliotecarios to count.
     * @example
     * // Count the number of Bibliotecarios
     * const count = await prisma.bibliotecario.count({
     *   where: {
     *     // ... the filter for the Bibliotecarios we want to count
     *   }
     * })
    **/
    count<T extends BibliotecarioCountArgs>(
      args?: Subset<T, BibliotecarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BibliotecarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bibliotecario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliotecarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BibliotecarioAggregateArgs>(args: Subset<T, BibliotecarioAggregateArgs>): Prisma.PrismaPromise<GetBibliotecarioAggregateType<T>>

    /**
     * Group by Bibliotecario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliotecarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BibliotecarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BibliotecarioGroupByArgs['orderBy'] }
        : { orderBy?: BibliotecarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BibliotecarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBibliotecarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bibliotecario model
   */
  readonly fields: BibliotecarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bibliotecario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BibliotecarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprestimos<T extends Bibliotecario$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, Bibliotecario$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservas<T extends Bibliotecario$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Bibliotecario$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bibliotecario model
   */
  interface BibliotecarioFieldRefs {
    readonly id: FieldRef<"Bibliotecario", 'Int'>
    readonly nome: FieldRef<"Bibliotecario", 'String'>
    readonly email: FieldRef<"Bibliotecario", 'String'>
    readonly senha: FieldRef<"Bibliotecario", 'String'>
    readonly cpf: FieldRef<"Bibliotecario", 'String'>
    readonly createdAt: FieldRef<"Bibliotecario", 'DateTime'>
    readonly updatedAt: FieldRef<"Bibliotecario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bibliotecario findUnique
   */
  export type BibliotecarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliotecario
     */
    select?: BibliotecarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bibliotecario
     */
    omit?: BibliotecarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibliotecarioInclude<ExtArgs> | null
    /**
     * Filter, which Bibliotecario to fetch.
     */
    where: BibliotecarioWhereUniqueInput
  }

  /**
   * Bibliotecario findUniqueOrThrow
   */
  export type BibliotecarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliotecario
     */
    select?: BibliotecarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bibliotecario
     */
    omit?: BibliotecarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibliotecarioInclude<ExtArgs> | null
    /**
     * Filter, which Bibliotecario to fetch.
     */
    where: BibliotecarioWhereUniqueInput
  }

  /**
   * Bibliotecario findFirst
   */
  export type BibliotecarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliotecario
     */
    select?: BibliotecarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bibliotecario
     */
    omit?: BibliotecarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibliotecarioInclude<ExtArgs> | null
    /**
     * Filter, which Bibliotecario to fetch.
     */
    where?: BibliotecarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bibliotecarios to fetch.
     */
    orderBy?: BibliotecarioOrderByWithRelationInput | BibliotecarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bibliotecarios.
     */
    cursor?: BibliotecarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bibliotecarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bibliotecarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bibliotecarios.
     */
    distinct?: BibliotecarioScalarFieldEnum | BibliotecarioScalarFieldEnum[]
  }

  /**
   * Bibliotecario findFirstOrThrow
   */
  export type BibliotecarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliotecario
     */
    select?: BibliotecarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bibliotecario
     */
    omit?: BibliotecarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibliotecarioInclude<ExtArgs> | null
    /**
     * Filter, which Bibliotecario to fetch.
     */
    where?: BibliotecarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bibliotecarios to fetch.
     */
    orderBy?: BibliotecarioOrderByWithRelationInput | BibliotecarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bibliotecarios.
     */
    cursor?: BibliotecarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bibliotecarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bibliotecarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bibliotecarios.
     */
    distinct?: BibliotecarioScalarFieldEnum | BibliotecarioScalarFieldEnum[]
  }

  /**
   * Bibliotecario findMany
   */
  export type BibliotecarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliotecario
     */
    select?: BibliotecarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bibliotecario
     */
    omit?: BibliotecarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibliotecarioInclude<ExtArgs> | null
    /**
     * Filter, which Bibliotecarios to fetch.
     */
    where?: BibliotecarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bibliotecarios to fetch.
     */
    orderBy?: BibliotecarioOrderByWithRelationInput | BibliotecarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bibliotecarios.
     */
    cursor?: BibliotecarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bibliotecarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bibliotecarios.
     */
    skip?: number
    distinct?: BibliotecarioScalarFieldEnum | BibliotecarioScalarFieldEnum[]
  }

  /**
   * Bibliotecario create
   */
  export type BibliotecarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliotecario
     */
    select?: BibliotecarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bibliotecario
     */
    omit?: BibliotecarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibliotecarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Bibliotecario.
     */
    data: XOR<BibliotecarioCreateInput, BibliotecarioUncheckedCreateInput>
  }

  /**
   * Bibliotecario createMany
   */
  export type BibliotecarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bibliotecarios.
     */
    data: BibliotecarioCreateManyInput | BibliotecarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bibliotecario createManyAndReturn
   */
  export type BibliotecarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliotecario
     */
    select?: BibliotecarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bibliotecario
     */
    omit?: BibliotecarioOmit<ExtArgs> | null
    /**
     * The data used to create many Bibliotecarios.
     */
    data: BibliotecarioCreateManyInput | BibliotecarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bibliotecario update
   */
  export type BibliotecarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliotecario
     */
    select?: BibliotecarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bibliotecario
     */
    omit?: BibliotecarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibliotecarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Bibliotecario.
     */
    data: XOR<BibliotecarioUpdateInput, BibliotecarioUncheckedUpdateInput>
    /**
     * Choose, which Bibliotecario to update.
     */
    where: BibliotecarioWhereUniqueInput
  }

  /**
   * Bibliotecario updateMany
   */
  export type BibliotecarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bibliotecarios.
     */
    data: XOR<BibliotecarioUpdateManyMutationInput, BibliotecarioUncheckedUpdateManyInput>
    /**
     * Filter which Bibliotecarios to update
     */
    where?: BibliotecarioWhereInput
    /**
     * Limit how many Bibliotecarios to update.
     */
    limit?: number
  }

  /**
   * Bibliotecario updateManyAndReturn
   */
  export type BibliotecarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliotecario
     */
    select?: BibliotecarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bibliotecario
     */
    omit?: BibliotecarioOmit<ExtArgs> | null
    /**
     * The data used to update Bibliotecarios.
     */
    data: XOR<BibliotecarioUpdateManyMutationInput, BibliotecarioUncheckedUpdateManyInput>
    /**
     * Filter which Bibliotecarios to update
     */
    where?: BibliotecarioWhereInput
    /**
     * Limit how many Bibliotecarios to update.
     */
    limit?: number
  }

  /**
   * Bibliotecario upsert
   */
  export type BibliotecarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliotecario
     */
    select?: BibliotecarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bibliotecario
     */
    omit?: BibliotecarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibliotecarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Bibliotecario to update in case it exists.
     */
    where: BibliotecarioWhereUniqueInput
    /**
     * In case the Bibliotecario found by the `where` argument doesn't exist, create a new Bibliotecario with this data.
     */
    create: XOR<BibliotecarioCreateInput, BibliotecarioUncheckedCreateInput>
    /**
     * In case the Bibliotecario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BibliotecarioUpdateInput, BibliotecarioUncheckedUpdateInput>
  }

  /**
   * Bibliotecario delete
   */
  export type BibliotecarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliotecario
     */
    select?: BibliotecarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bibliotecario
     */
    omit?: BibliotecarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibliotecarioInclude<ExtArgs> | null
    /**
     * Filter which Bibliotecario to delete.
     */
    where: BibliotecarioWhereUniqueInput
  }

  /**
   * Bibliotecario deleteMany
   */
  export type BibliotecarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bibliotecarios to delete
     */
    where?: BibliotecarioWhereInput
    /**
     * Limit how many Bibliotecarios to delete.
     */
    limit?: number
  }

  /**
   * Bibliotecario.emprestimos
   */
  export type Bibliotecario$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    cursor?: EmprestimoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Bibliotecario.reservas
   */
  export type Bibliotecario$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Bibliotecario without action
   */
  export type BibliotecarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliotecario
     */
    select?: BibliotecarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bibliotecario
     */
    omit?: BibliotecarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BibliotecarioInclude<ExtArgs> | null
  }


  /**
   * Model Livros
   */

  export type AggregateLivros = {
    _count: LivrosCountAggregateOutputType | null
    _avg: LivrosAvgAggregateOutputType | null
    _sum: LivrosSumAggregateOutputType | null
    _min: LivrosMinAggregateOutputType | null
    _max: LivrosMaxAggregateOutputType | null
  }

  export type LivrosAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
  }

  export type LivrosSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
  }

  export type LivrosMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    genero: string | null
    status: boolean | null
    quantidade: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LivrosMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    genero: string | null
    status: boolean | null
    quantidade: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LivrosCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    genero: number
    status: number
    quantidade: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LivrosAvgAggregateInputType = {
    id?: true
    quantidade?: true
  }

  export type LivrosSumAggregateInputType = {
    id?: true
    quantidade?: true
  }

  export type LivrosMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    genero?: true
    status?: true
    quantidade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LivrosMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    genero?: true
    status?: true
    quantidade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LivrosCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    genero?: true
    status?: true
    quantidade?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LivrosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livros to aggregate.
     */
    where?: LivrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivrosOrderByWithRelationInput | LivrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Livros
    **/
    _count?: true | LivrosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivrosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivrosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivrosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivrosMaxAggregateInputType
  }

  export type GetLivrosAggregateType<T extends LivrosAggregateArgs> = {
        [P in keyof T & keyof AggregateLivros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivros[P]>
      : GetScalarType<T[P], AggregateLivros[P]>
  }




  export type LivrosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivrosWhereInput
    orderBy?: LivrosOrderByWithAggregationInput | LivrosOrderByWithAggregationInput[]
    by: LivrosScalarFieldEnum[] | LivrosScalarFieldEnum
    having?: LivrosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivrosCountAggregateInputType | true
    _avg?: LivrosAvgAggregateInputType
    _sum?: LivrosSumAggregateInputType
    _min?: LivrosMinAggregateInputType
    _max?: LivrosMaxAggregateInputType
  }

  export type LivrosGroupByOutputType = {
    id: number
    titulo: string
    descricao: string
    genero: string
    status: boolean
    quantidade: number
    createdAt: Date
    updatedAt: Date
    _count: LivrosCountAggregateOutputType | null
    _avg: LivrosAvgAggregateOutputType | null
    _sum: LivrosSumAggregateOutputType | null
    _min: LivrosMinAggregateOutputType | null
    _max: LivrosMaxAggregateOutputType | null
  }

  type GetLivrosGroupByPayload<T extends LivrosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivrosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivrosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivrosGroupByOutputType[P]>
            : GetScalarType<T[P], LivrosGroupByOutputType[P]>
        }
      >
    >


  export type LivrosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    genero?: boolean
    status?: boolean
    quantidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emprestimos?: boolean | Livros$emprestimosArgs<ExtArgs>
    reservas?: boolean | Livros$reservasArgs<ExtArgs>
    _count?: boolean | LivrosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livros"]>

  export type LivrosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    genero?: boolean
    status?: boolean
    quantidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["livros"]>

  export type LivrosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    genero?: boolean
    status?: boolean
    quantidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["livros"]>

  export type LivrosSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    genero?: boolean
    status?: boolean
    quantidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LivrosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "genero" | "status" | "quantidade" | "createdAt" | "updatedAt", ExtArgs["result"]["livros"]>
  export type LivrosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | Livros$emprestimosArgs<ExtArgs>
    reservas?: boolean | Livros$reservasArgs<ExtArgs>
    _count?: boolean | LivrosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LivrosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LivrosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LivrosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Livros"
    objects: {
      emprestimos: Prisma.$EmprestimoPayload<ExtArgs>[]
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string
      genero: string
      status: boolean
      quantidade: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["livros"]>
    composites: {}
  }

  type LivrosGetPayload<S extends boolean | null | undefined | LivrosDefaultArgs> = $Result.GetResult<Prisma.$LivrosPayload, S>

  type LivrosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivrosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivrosCountAggregateInputType | true
    }

  export interface LivrosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Livros'], meta: { name: 'Livros' } }
    /**
     * Find zero or one Livros that matches the filter.
     * @param {LivrosFindUniqueArgs} args - Arguments to find a Livros
     * @example
     * // Get one Livros
     * const livros = await prisma.livros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivrosFindUniqueArgs>(args: SelectSubset<T, LivrosFindUniqueArgs<ExtArgs>>): Prisma__LivrosClient<$Result.GetResult<Prisma.$LivrosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livros that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivrosFindUniqueOrThrowArgs} args - Arguments to find a Livros
     * @example
     * // Get one Livros
     * const livros = await prisma.livros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivrosFindUniqueOrThrowArgs>(args: SelectSubset<T, LivrosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivrosClient<$Result.GetResult<Prisma.$LivrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivrosFindFirstArgs} args - Arguments to find a Livros
     * @example
     * // Get one Livros
     * const livros = await prisma.livros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivrosFindFirstArgs>(args?: SelectSubset<T, LivrosFindFirstArgs<ExtArgs>>): Prisma__LivrosClient<$Result.GetResult<Prisma.$LivrosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivrosFindFirstOrThrowArgs} args - Arguments to find a Livros
     * @example
     * // Get one Livros
     * const livros = await prisma.livros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivrosFindFirstOrThrowArgs>(args?: SelectSubset<T, LivrosFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivrosClient<$Result.GetResult<Prisma.$LivrosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivrosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livros
     * const livros = await prisma.livros.findMany()
     * 
     * // Get first 10 Livros
     * const livros = await prisma.livros.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const livrosWithIdOnly = await prisma.livros.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LivrosFindManyArgs>(args?: SelectSubset<T, LivrosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livros.
     * @param {LivrosCreateArgs} args - Arguments to create a Livros.
     * @example
     * // Create one Livros
     * const Livros = await prisma.livros.create({
     *   data: {
     *     // ... data to create a Livros
     *   }
     * })
     * 
     */
    create<T extends LivrosCreateArgs>(args: SelectSubset<T, LivrosCreateArgs<ExtArgs>>): Prisma__LivrosClient<$Result.GetResult<Prisma.$LivrosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livros.
     * @param {LivrosCreateManyArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livros = await prisma.livros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivrosCreateManyArgs>(args?: SelectSubset<T, LivrosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Livros and returns the data saved in the database.
     * @param {LivrosCreateManyAndReturnArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livros = await prisma.livros.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Livros and only return the `id`
     * const livrosWithIdOnly = await prisma.livros.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LivrosCreateManyAndReturnArgs>(args?: SelectSubset<T, LivrosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivrosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livros.
     * @param {LivrosDeleteArgs} args - Arguments to delete one Livros.
     * @example
     * // Delete one Livros
     * const Livros = await prisma.livros.delete({
     *   where: {
     *     // ... filter to delete one Livros
     *   }
     * })
     * 
     */
    delete<T extends LivrosDeleteArgs>(args: SelectSubset<T, LivrosDeleteArgs<ExtArgs>>): Prisma__LivrosClient<$Result.GetResult<Prisma.$LivrosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livros.
     * @param {LivrosUpdateArgs} args - Arguments to update one Livros.
     * @example
     * // Update one Livros
     * const livros = await prisma.livros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivrosUpdateArgs>(args: SelectSubset<T, LivrosUpdateArgs<ExtArgs>>): Prisma__LivrosClient<$Result.GetResult<Prisma.$LivrosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livros.
     * @param {LivrosDeleteManyArgs} args - Arguments to filter Livros to delete.
     * @example
     * // Delete a few Livros
     * const { count } = await prisma.livros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivrosDeleteManyArgs>(args?: SelectSubset<T, LivrosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivrosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livros
     * const livros = await prisma.livros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivrosUpdateManyArgs>(args: SelectSubset<T, LivrosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros and returns the data updated in the database.
     * @param {LivrosUpdateManyAndReturnArgs} args - Arguments to update many Livros.
     * @example
     * // Update many Livros
     * const livros = await prisma.livros.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Livros and only return the `id`
     * const livrosWithIdOnly = await prisma.livros.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LivrosUpdateManyAndReturnArgs>(args: SelectSubset<T, LivrosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivrosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livros.
     * @param {LivrosUpsertArgs} args - Arguments to update or create a Livros.
     * @example
     * // Update or create a Livros
     * const livros = await prisma.livros.upsert({
     *   create: {
     *     // ... data to create a Livros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livros we want to update
     *   }
     * })
     */
    upsert<T extends LivrosUpsertArgs>(args: SelectSubset<T, LivrosUpsertArgs<ExtArgs>>): Prisma__LivrosClient<$Result.GetResult<Prisma.$LivrosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivrosCountArgs} args - Arguments to filter Livros to count.
     * @example
     * // Count the number of Livros
     * const count = await prisma.livros.count({
     *   where: {
     *     // ... the filter for the Livros we want to count
     *   }
     * })
    **/
    count<T extends LivrosCountArgs>(
      args?: Subset<T, LivrosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivrosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivrosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LivrosAggregateArgs>(args: Subset<T, LivrosAggregateArgs>): Prisma.PrismaPromise<GetLivrosAggregateType<T>>

    /**
     * Group by Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivrosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LivrosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivrosGroupByArgs['orderBy'] }
        : { orderBy?: LivrosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LivrosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Livros model
   */
  readonly fields: LivrosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivrosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprestimos<T extends Livros$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, Livros$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservas<T extends Livros$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Livros$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Livros model
   */
  interface LivrosFieldRefs {
    readonly id: FieldRef<"Livros", 'Int'>
    readonly titulo: FieldRef<"Livros", 'String'>
    readonly descricao: FieldRef<"Livros", 'String'>
    readonly genero: FieldRef<"Livros", 'String'>
    readonly status: FieldRef<"Livros", 'Boolean'>
    readonly quantidade: FieldRef<"Livros", 'Int'>
    readonly createdAt: FieldRef<"Livros", 'DateTime'>
    readonly updatedAt: FieldRef<"Livros", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Livros findUnique
   */
  export type LivrosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livros
     */
    select?: LivrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livros
     */
    omit?: LivrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivrosInclude<ExtArgs> | null
    /**
     * Filter, which Livros to fetch.
     */
    where: LivrosWhereUniqueInput
  }

  /**
   * Livros findUniqueOrThrow
   */
  export type LivrosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livros
     */
    select?: LivrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livros
     */
    omit?: LivrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivrosInclude<ExtArgs> | null
    /**
     * Filter, which Livros to fetch.
     */
    where: LivrosWhereUniqueInput
  }

  /**
   * Livros findFirst
   */
  export type LivrosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livros
     */
    select?: LivrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livros
     */
    omit?: LivrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivrosInclude<ExtArgs> | null
    /**
     * Filter, which Livros to fetch.
     */
    where?: LivrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivrosOrderByWithRelationInput | LivrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivrosScalarFieldEnum | LivrosScalarFieldEnum[]
  }

  /**
   * Livros findFirstOrThrow
   */
  export type LivrosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livros
     */
    select?: LivrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livros
     */
    omit?: LivrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivrosInclude<ExtArgs> | null
    /**
     * Filter, which Livros to fetch.
     */
    where?: LivrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivrosOrderByWithRelationInput | LivrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivrosScalarFieldEnum | LivrosScalarFieldEnum[]
  }

  /**
   * Livros findMany
   */
  export type LivrosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livros
     */
    select?: LivrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livros
     */
    omit?: LivrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivrosInclude<ExtArgs> | null
    /**
     * Filter, which Livros to fetch.
     */
    where?: LivrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivrosOrderByWithRelationInput | LivrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Livros.
     */
    cursor?: LivrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    distinct?: LivrosScalarFieldEnum | LivrosScalarFieldEnum[]
  }

  /**
   * Livros create
   */
  export type LivrosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livros
     */
    select?: LivrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livros
     */
    omit?: LivrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivrosInclude<ExtArgs> | null
    /**
     * The data needed to create a Livros.
     */
    data: XOR<LivrosCreateInput, LivrosUncheckedCreateInput>
  }

  /**
   * Livros createMany
   */
  export type LivrosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Livros.
     */
    data: LivrosCreateManyInput | LivrosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livros createManyAndReturn
   */
  export type LivrosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livros
     */
    select?: LivrosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livros
     */
    omit?: LivrosOmit<ExtArgs> | null
    /**
     * The data used to create many Livros.
     */
    data: LivrosCreateManyInput | LivrosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livros update
   */
  export type LivrosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livros
     */
    select?: LivrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livros
     */
    omit?: LivrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivrosInclude<ExtArgs> | null
    /**
     * The data needed to update a Livros.
     */
    data: XOR<LivrosUpdateInput, LivrosUncheckedUpdateInput>
    /**
     * Choose, which Livros to update.
     */
    where: LivrosWhereUniqueInput
  }

  /**
   * Livros updateMany
   */
  export type LivrosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Livros.
     */
    data: XOR<LivrosUpdateManyMutationInput, LivrosUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivrosWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livros updateManyAndReturn
   */
  export type LivrosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livros
     */
    select?: LivrosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livros
     */
    omit?: LivrosOmit<ExtArgs> | null
    /**
     * The data used to update Livros.
     */
    data: XOR<LivrosUpdateManyMutationInput, LivrosUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivrosWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livros upsert
   */
  export type LivrosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livros
     */
    select?: LivrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livros
     */
    omit?: LivrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivrosInclude<ExtArgs> | null
    /**
     * The filter to search for the Livros to update in case it exists.
     */
    where: LivrosWhereUniqueInput
    /**
     * In case the Livros found by the `where` argument doesn't exist, create a new Livros with this data.
     */
    create: XOR<LivrosCreateInput, LivrosUncheckedCreateInput>
    /**
     * In case the Livros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivrosUpdateInput, LivrosUncheckedUpdateInput>
  }

  /**
   * Livros delete
   */
  export type LivrosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livros
     */
    select?: LivrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livros
     */
    omit?: LivrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivrosInclude<ExtArgs> | null
    /**
     * Filter which Livros to delete.
     */
    where: LivrosWhereUniqueInput
  }

  /**
   * Livros deleteMany
   */
  export type LivrosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livros to delete
     */
    where?: LivrosWhereInput
    /**
     * Limit how many Livros to delete.
     */
    limit?: number
  }

  /**
   * Livros.emprestimos
   */
  export type Livros$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    cursor?: EmprestimoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Livros.reservas
   */
  export type Livros$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Livros without action
   */
  export type LivrosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livros
     */
    select?: LivrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livros
     */
    omit?: LivrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivrosInclude<ExtArgs> | null
  }


  /**
   * Model Emprestimo
   */

  export type AggregateEmprestimo = {
    _count: EmprestimoCountAggregateOutputType | null
    _avg: EmprestimoAvgAggregateOutputType | null
    _sum: EmprestimoSumAggregateOutputType | null
    _min: EmprestimoMinAggregateOutputType | null
    _max: EmprestimoMaxAggregateOutputType | null
  }

  export type EmprestimoAvgAggregateOutputType = {
    id: number | null
    bibliotecarioId: number | null
    livrosId: number | null
  }

  export type EmprestimoSumAggregateOutputType = {
    id: number | null
    bibliotecarioId: number | null
    livrosId: number | null
  }

  export type EmprestimoMinAggregateOutputType = {
    id: number | null
    dataPedido: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    clienteCpf: string | null
    bibliotecarioId: number | null
    livrosId: number | null
  }

  export type EmprestimoMaxAggregateOutputType = {
    id: number | null
    dataPedido: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    clienteCpf: string | null
    bibliotecarioId: number | null
    livrosId: number | null
  }

  export type EmprestimoCountAggregateOutputType = {
    id: number
    dataPedido: number
    createdAt: number
    updatedAt: number
    clienteCpf: number
    bibliotecarioId: number
    livrosId: number
    _all: number
  }


  export type EmprestimoAvgAggregateInputType = {
    id?: true
    bibliotecarioId?: true
    livrosId?: true
  }

  export type EmprestimoSumAggregateInputType = {
    id?: true
    bibliotecarioId?: true
    livrosId?: true
  }

  export type EmprestimoMinAggregateInputType = {
    id?: true
    dataPedido?: true
    createdAt?: true
    updatedAt?: true
    clienteCpf?: true
    bibliotecarioId?: true
    livrosId?: true
  }

  export type EmprestimoMaxAggregateInputType = {
    id?: true
    dataPedido?: true
    createdAt?: true
    updatedAt?: true
    clienteCpf?: true
    bibliotecarioId?: true
    livrosId?: true
  }

  export type EmprestimoCountAggregateInputType = {
    id?: true
    dataPedido?: true
    createdAt?: true
    updatedAt?: true
    clienteCpf?: true
    bibliotecarioId?: true
    livrosId?: true
    _all?: true
  }

  export type EmprestimoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprestimo to aggregate.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emprestimos
    **/
    _count?: true | EmprestimoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmprestimoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmprestimoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmprestimoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmprestimoMaxAggregateInputType
  }

  export type GetEmprestimoAggregateType<T extends EmprestimoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmprestimo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmprestimo[P]>
      : GetScalarType<T[P], AggregateEmprestimo[P]>
  }




  export type EmprestimoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestimoWhereInput
    orderBy?: EmprestimoOrderByWithAggregationInput | EmprestimoOrderByWithAggregationInput[]
    by: EmprestimoScalarFieldEnum[] | EmprestimoScalarFieldEnum
    having?: EmprestimoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmprestimoCountAggregateInputType | true
    _avg?: EmprestimoAvgAggregateInputType
    _sum?: EmprestimoSumAggregateInputType
    _min?: EmprestimoMinAggregateInputType
    _max?: EmprestimoMaxAggregateInputType
  }

  export type EmprestimoGroupByOutputType = {
    id: number
    dataPedido: Date
    createdAt: Date
    updatedAt: Date
    clienteCpf: string
    bibliotecarioId: number
    livrosId: number
    _count: EmprestimoCountAggregateOutputType | null
    _avg: EmprestimoAvgAggregateOutputType | null
    _sum: EmprestimoSumAggregateOutputType | null
    _min: EmprestimoMinAggregateOutputType | null
    _max: EmprestimoMaxAggregateOutputType | null
  }

  type GetEmprestimoGroupByPayload<T extends EmprestimoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmprestimoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmprestimoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmprestimoGroupByOutputType[P]>
            : GetScalarType<T[P], EmprestimoGroupByOutputType[P]>
        }
      >
    >


  export type EmprestimoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataPedido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteCpf?: boolean
    bibliotecarioId?: boolean
    livrosId?: boolean
    livro?: boolean | LivrosDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    bibliotecario?: boolean | BibliotecarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type EmprestimoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataPedido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteCpf?: boolean
    bibliotecarioId?: boolean
    livrosId?: boolean
    livro?: boolean | LivrosDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    bibliotecario?: boolean | BibliotecarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type EmprestimoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataPedido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteCpf?: boolean
    bibliotecarioId?: boolean
    livrosId?: boolean
    livro?: boolean | LivrosDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    bibliotecario?: boolean | BibliotecarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestimo"]>

  export type EmprestimoSelectScalar = {
    id?: boolean
    dataPedido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteCpf?: boolean
    bibliotecarioId?: boolean
    livrosId?: boolean
  }

  export type EmprestimoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataPedido" | "createdAt" | "updatedAt" | "clienteCpf" | "bibliotecarioId" | "livrosId", ExtArgs["result"]["emprestimo"]>
  export type EmprestimoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivrosDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    bibliotecario?: boolean | BibliotecarioDefaultArgs<ExtArgs>
  }
  export type EmprestimoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivrosDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    bibliotecario?: boolean | BibliotecarioDefaultArgs<ExtArgs>
  }
  export type EmprestimoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivrosDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    bibliotecario?: boolean | BibliotecarioDefaultArgs<ExtArgs>
  }

  export type $EmprestimoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emprestimo"
    objects: {
      livro: Prisma.$LivrosPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
      bibliotecario: Prisma.$BibliotecarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dataPedido: Date
      createdAt: Date
      updatedAt: Date
      clienteCpf: string
      bibliotecarioId: number
      livrosId: number
    }, ExtArgs["result"]["emprestimo"]>
    composites: {}
  }

  type EmprestimoGetPayload<S extends boolean | null | undefined | EmprestimoDefaultArgs> = $Result.GetResult<Prisma.$EmprestimoPayload, S>

  type EmprestimoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmprestimoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmprestimoCountAggregateInputType | true
    }

  export interface EmprestimoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emprestimo'], meta: { name: 'Emprestimo' } }
    /**
     * Find zero or one Emprestimo that matches the filter.
     * @param {EmprestimoFindUniqueArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmprestimoFindUniqueArgs>(args: SelectSubset<T, EmprestimoFindUniqueArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emprestimo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmprestimoFindUniqueOrThrowArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmprestimoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmprestimoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestimo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindFirstArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmprestimoFindFirstArgs>(args?: SelectSubset<T, EmprestimoFindFirstArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestimo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindFirstOrThrowArgs} args - Arguments to find a Emprestimo
     * @example
     * // Get one Emprestimo
     * const emprestimo = await prisma.emprestimo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmprestimoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmprestimoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emprestimos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emprestimos
     * const emprestimos = await prisma.emprestimo.findMany()
     * 
     * // Get first 10 Emprestimos
     * const emprestimos = await prisma.emprestimo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emprestimoWithIdOnly = await prisma.emprestimo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmprestimoFindManyArgs>(args?: SelectSubset<T, EmprestimoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emprestimo.
     * @param {EmprestimoCreateArgs} args - Arguments to create a Emprestimo.
     * @example
     * // Create one Emprestimo
     * const Emprestimo = await prisma.emprestimo.create({
     *   data: {
     *     // ... data to create a Emprestimo
     *   }
     * })
     * 
     */
    create<T extends EmprestimoCreateArgs>(args: SelectSubset<T, EmprestimoCreateArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emprestimos.
     * @param {EmprestimoCreateManyArgs} args - Arguments to create many Emprestimos.
     * @example
     * // Create many Emprestimos
     * const emprestimo = await prisma.emprestimo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmprestimoCreateManyArgs>(args?: SelectSubset<T, EmprestimoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emprestimos and returns the data saved in the database.
     * @param {EmprestimoCreateManyAndReturnArgs} args - Arguments to create many Emprestimos.
     * @example
     * // Create many Emprestimos
     * const emprestimo = await prisma.emprestimo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emprestimos and only return the `id`
     * const emprestimoWithIdOnly = await prisma.emprestimo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmprestimoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmprestimoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emprestimo.
     * @param {EmprestimoDeleteArgs} args - Arguments to delete one Emprestimo.
     * @example
     * // Delete one Emprestimo
     * const Emprestimo = await prisma.emprestimo.delete({
     *   where: {
     *     // ... filter to delete one Emprestimo
     *   }
     * })
     * 
     */
    delete<T extends EmprestimoDeleteArgs>(args: SelectSubset<T, EmprestimoDeleteArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emprestimo.
     * @param {EmprestimoUpdateArgs} args - Arguments to update one Emprestimo.
     * @example
     * // Update one Emprestimo
     * const emprestimo = await prisma.emprestimo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmprestimoUpdateArgs>(args: SelectSubset<T, EmprestimoUpdateArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emprestimos.
     * @param {EmprestimoDeleteManyArgs} args - Arguments to filter Emprestimos to delete.
     * @example
     * // Delete a few Emprestimos
     * const { count } = await prisma.emprestimo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmprestimoDeleteManyArgs>(args?: SelectSubset<T, EmprestimoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emprestimos
     * const emprestimo = await prisma.emprestimo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmprestimoUpdateManyArgs>(args: SelectSubset<T, EmprestimoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestimos and returns the data updated in the database.
     * @param {EmprestimoUpdateManyAndReturnArgs} args - Arguments to update many Emprestimos.
     * @example
     * // Update many Emprestimos
     * const emprestimo = await prisma.emprestimo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emprestimos and only return the `id`
     * const emprestimoWithIdOnly = await prisma.emprestimo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmprestimoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmprestimoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emprestimo.
     * @param {EmprestimoUpsertArgs} args - Arguments to update or create a Emprestimo.
     * @example
     * // Update or create a Emprestimo
     * const emprestimo = await prisma.emprestimo.upsert({
     *   create: {
     *     // ... data to create a Emprestimo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emprestimo we want to update
     *   }
     * })
     */
    upsert<T extends EmprestimoUpsertArgs>(args: SelectSubset<T, EmprestimoUpsertArgs<ExtArgs>>): Prisma__EmprestimoClient<$Result.GetResult<Prisma.$EmprestimoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emprestimos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoCountArgs} args - Arguments to filter Emprestimos to count.
     * @example
     * // Count the number of Emprestimos
     * const count = await prisma.emprestimo.count({
     *   where: {
     *     // ... the filter for the Emprestimos we want to count
     *   }
     * })
    **/
    count<T extends EmprestimoCountArgs>(
      args?: Subset<T, EmprestimoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmprestimoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmprestimoAggregateArgs>(args: Subset<T, EmprestimoAggregateArgs>): Prisma.PrismaPromise<GetEmprestimoAggregateType<T>>

    /**
     * Group by Emprestimo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestimoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmprestimoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmprestimoGroupByArgs['orderBy'] }
        : { orderBy?: EmprestimoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmprestimoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmprestimoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emprestimo model
   */
  readonly fields: EmprestimoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emprestimo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmprestimoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livro<T extends LivrosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivrosDefaultArgs<ExtArgs>>): Prisma__LivrosClient<$Result.GetResult<Prisma.$LivrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bibliotecario<T extends BibliotecarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BibliotecarioDefaultArgs<ExtArgs>>): Prisma__BibliotecarioClient<$Result.GetResult<Prisma.$BibliotecarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Emprestimo model
   */
  interface EmprestimoFieldRefs {
    readonly id: FieldRef<"Emprestimo", 'Int'>
    readonly dataPedido: FieldRef<"Emprestimo", 'DateTime'>
    readonly createdAt: FieldRef<"Emprestimo", 'DateTime'>
    readonly updatedAt: FieldRef<"Emprestimo", 'DateTime'>
    readonly clienteCpf: FieldRef<"Emprestimo", 'String'>
    readonly bibliotecarioId: FieldRef<"Emprestimo", 'Int'>
    readonly livrosId: FieldRef<"Emprestimo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Emprestimo findUnique
   */
  export type EmprestimoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo findUniqueOrThrow
   */
  export type EmprestimoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo findFirst
   */
  export type EmprestimoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprestimos.
     */
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo findFirstOrThrow
   */
  export type EmprestimoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimo to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprestimos.
     */
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo findMany
   */
  export type EmprestimoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestimos to fetch.
     */
    where?: EmprestimoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestimos to fetch.
     */
    orderBy?: EmprestimoOrderByWithRelationInput | EmprestimoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emprestimos.
     */
    cursor?: EmprestimoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestimos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestimos.
     */
    skip?: number
    distinct?: EmprestimoScalarFieldEnum | EmprestimoScalarFieldEnum[]
  }

  /**
   * Emprestimo create
   */
  export type EmprestimoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to create a Emprestimo.
     */
    data: XOR<EmprestimoCreateInput, EmprestimoUncheckedCreateInput>
  }

  /**
   * Emprestimo createMany
   */
  export type EmprestimoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emprestimos.
     */
    data: EmprestimoCreateManyInput | EmprestimoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emprestimo createManyAndReturn
   */
  export type EmprestimoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * The data used to create many Emprestimos.
     */
    data: EmprestimoCreateManyInput | EmprestimoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprestimo update
   */
  export type EmprestimoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The data needed to update a Emprestimo.
     */
    data: XOR<EmprestimoUpdateInput, EmprestimoUncheckedUpdateInput>
    /**
     * Choose, which Emprestimo to update.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo updateMany
   */
  export type EmprestimoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emprestimos.
     */
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyInput>
    /**
     * Filter which Emprestimos to update
     */
    where?: EmprestimoWhereInput
    /**
     * Limit how many Emprestimos to update.
     */
    limit?: number
  }

  /**
   * Emprestimo updateManyAndReturn
   */
  export type EmprestimoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * The data used to update Emprestimos.
     */
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyInput>
    /**
     * Filter which Emprestimos to update
     */
    where?: EmprestimoWhereInput
    /**
     * Limit how many Emprestimos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprestimo upsert
   */
  export type EmprestimoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * The filter to search for the Emprestimo to update in case it exists.
     */
    where: EmprestimoWhereUniqueInput
    /**
     * In case the Emprestimo found by the `where` argument doesn't exist, create a new Emprestimo with this data.
     */
    create: XOR<EmprestimoCreateInput, EmprestimoUncheckedCreateInput>
    /**
     * In case the Emprestimo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmprestimoUpdateInput, EmprestimoUncheckedUpdateInput>
  }

  /**
   * Emprestimo delete
   */
  export type EmprestimoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
    /**
     * Filter which Emprestimo to delete.
     */
    where: EmprestimoWhereUniqueInput
  }

  /**
   * Emprestimo deleteMany
   */
  export type EmprestimoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprestimos to delete
     */
    where?: EmprestimoWhereInput
    /**
     * Limit how many Emprestimos to delete.
     */
    limit?: number
  }

  /**
   * Emprestimo without action
   */
  export type EmprestimoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestimo
     */
    select?: EmprestimoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestimo
     */
    omit?: EmprestimoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestimoInclude<ExtArgs> | null
  }


  /**
   * Model Reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaAvgAggregateOutputType = {
    id: number | null
    bibliotecarioId: number | null
    livrosId: number | null
  }

  export type ReservaSumAggregateOutputType = {
    id: number | null
    bibliotecarioId: number | null
    livrosId: number | null
  }

  export type ReservaMinAggregateOutputType = {
    id: number | null
    dataPedido: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    clienteCpf: string | null
    bibliotecarioId: number | null
    livrosId: number | null
  }

  export type ReservaMaxAggregateOutputType = {
    id: number | null
    dataPedido: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    clienteCpf: string | null
    bibliotecarioId: number | null
    livrosId: number | null
  }

  export type ReservaCountAggregateOutputType = {
    id: number
    dataPedido: number
    createdAt: number
    updatedAt: number
    clienteCpf: number
    bibliotecarioId: number
    livrosId: number
    _all: number
  }


  export type ReservaAvgAggregateInputType = {
    id?: true
    bibliotecarioId?: true
    livrosId?: true
  }

  export type ReservaSumAggregateInputType = {
    id?: true
    bibliotecarioId?: true
    livrosId?: true
  }

  export type ReservaMinAggregateInputType = {
    id?: true
    dataPedido?: true
    createdAt?: true
    updatedAt?: true
    clienteCpf?: true
    bibliotecarioId?: true
    livrosId?: true
  }

  export type ReservaMaxAggregateInputType = {
    id?: true
    dataPedido?: true
    createdAt?: true
    updatedAt?: true
    clienteCpf?: true
    bibliotecarioId?: true
    livrosId?: true
  }

  export type ReservaCountAggregateInputType = {
    id?: true
    dataPedido?: true
    createdAt?: true
    updatedAt?: true
    clienteCpf?: true
    bibliotecarioId?: true
    livrosId?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reserva to aggregate.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type ReservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithAggregationInput | ReservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: ReservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _avg?: ReservaAvgAggregateInputType
    _sum?: ReservaSumAggregateInputType
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id: number
    dataPedido: Date
    createdAt: Date
    updatedAt: Date
    clienteCpf: string
    bibliotecarioId: number
    livrosId: number
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends ReservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type ReservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataPedido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteCpf?: boolean
    bibliotecarioId?: boolean
    livrosId?: boolean
    livro?: boolean | LivrosDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    bibliotecario?: boolean | BibliotecarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataPedido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteCpf?: boolean
    bibliotecarioId?: boolean
    livrosId?: boolean
    livro?: boolean | LivrosDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    bibliotecario?: boolean | BibliotecarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataPedido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteCpf?: boolean
    bibliotecarioId?: boolean
    livrosId?: boolean
    livro?: boolean | LivrosDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    bibliotecario?: boolean | BibliotecarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectScalar = {
    id?: boolean
    dataPedido?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clienteCpf?: boolean
    bibliotecarioId?: boolean
    livrosId?: boolean
  }

  export type ReservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataPedido" | "createdAt" | "updatedAt" | "clienteCpf" | "bibliotecarioId" | "livrosId", ExtArgs["result"]["reserva"]>
  export type ReservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivrosDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    bibliotecario?: boolean | BibliotecarioDefaultArgs<ExtArgs>
  }
  export type ReservaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivrosDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    bibliotecario?: boolean | BibliotecarioDefaultArgs<ExtArgs>
  }
  export type ReservaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivrosDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    bibliotecario?: boolean | BibliotecarioDefaultArgs<ExtArgs>
  }

  export type $ReservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reserva"
    objects: {
      livro: Prisma.$LivrosPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
      bibliotecario: Prisma.$BibliotecarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dataPedido: Date
      createdAt: Date
      updatedAt: Date
      clienteCpf: string
      bibliotecarioId: number
      livrosId: number
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type ReservaGetPayload<S extends boolean | null | undefined | ReservaDefaultArgs> = $Result.GetResult<Prisma.$ReservaPayload, S>

  type ReservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface ReservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reserva'], meta: { name: 'Reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {ReservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservaFindUniqueArgs>(args: SelectSubset<T, ReservaFindUniqueArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservaFindFirstArgs>(args?: SelectSubset<T, ReservaFindFirstArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservaWithIdOnly = await prisma.reserva.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservaFindManyArgs>(args?: SelectSubset<T, ReservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva.
     * @param {ReservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends ReservaCreateArgs>(args: SelectSubset<T, ReservaCreateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {ReservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservaCreateManyArgs>(args?: SelectSubset<T, ReservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {ReservaCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserva.
     * @param {ReservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends ReservaDeleteArgs>(args: SelectSubset<T, ReservaDeleteArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva.
     * @param {ReservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservaUpdateArgs>(args: SelectSubset<T, ReservaUpdateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {ReservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservaDeleteManyArgs>(args?: SelectSubset<T, ReservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservaUpdateManyArgs>(args: SelectSubset<T, ReservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {ReservaUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserva.
     * @param {ReservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends ReservaUpsertArgs>(args: SelectSubset<T, ReservaUpsertArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends ReservaCountArgs>(
      args?: Subset<T, ReservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservaGroupByArgs['orderBy'] }
        : { orderBy?: ReservaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reserva model
   */
  readonly fields: ReservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livro<T extends LivrosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivrosDefaultArgs<ExtArgs>>): Prisma__LivrosClient<$Result.GetResult<Prisma.$LivrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bibliotecario<T extends BibliotecarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BibliotecarioDefaultArgs<ExtArgs>>): Prisma__BibliotecarioClient<$Result.GetResult<Prisma.$BibliotecarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reserva model
   */
  interface ReservaFieldRefs {
    readonly id: FieldRef<"Reserva", 'Int'>
    readonly dataPedido: FieldRef<"Reserva", 'DateTime'>
    readonly createdAt: FieldRef<"Reserva", 'DateTime'>
    readonly updatedAt: FieldRef<"Reserva", 'DateTime'>
    readonly clienteCpf: FieldRef<"Reserva", 'String'>
    readonly bibliotecarioId: FieldRef<"Reserva", 'Int'>
    readonly livrosId: FieldRef<"Reserva", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reserva findUnique
   */
  export type ReservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findUniqueOrThrow
   */
  export type ReservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findFirst
   */
  export type ReservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findFirstOrThrow
   */
  export type ReservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findMany
   */
  export type ReservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva create
   */
  export type ReservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to create a Reserva.
     */
    data: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
  }

  /**
   * Reserva createMany
   */
  export type ReservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reserva createManyAndReturn
   */
  export type ReservaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva update
   */
  export type ReservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to update a Reserva.
     */
    data: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
    /**
     * Choose, which Reserva to update.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva updateMany
   */
  export type ReservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
  }

  /**
   * Reserva updateManyAndReturn
   */
  export type ReservaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva upsert
   */
  export type ReservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The filter to search for the Reserva to update in case it exists.
     */
    where: ReservaWhereUniqueInput
    /**
     * In case the Reserva found by the `where` argument doesn't exist, create a new Reserva with this data.
     */
    create: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
    /**
     * In case the Reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
  }

  /**
   * Reserva delete
   */
  export type ReservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter which Reserva to delete.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva deleteMany
   */
  export type ReservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to delete
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to delete.
     */
    limit?: number
  }

  /**
   * Reserva without action
   */
  export type ReservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    cpf: 'cpf',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const BibliotecarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    cpf: 'cpf',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BibliotecarioScalarFieldEnum = (typeof BibliotecarioScalarFieldEnum)[keyof typeof BibliotecarioScalarFieldEnum]


  export const LivrosScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    genero: 'genero',
    status: 'status',
    quantidade: 'quantidade',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LivrosScalarFieldEnum = (typeof LivrosScalarFieldEnum)[keyof typeof LivrosScalarFieldEnum]


  export const EmprestimoScalarFieldEnum: {
    id: 'id',
    dataPedido: 'dataPedido',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clienteCpf: 'clienteCpf',
    bibliotecarioId: 'bibliotecarioId',
    livrosId: 'livrosId'
  };

  export type EmprestimoScalarFieldEnum = (typeof EmprestimoScalarFieldEnum)[keyof typeof EmprestimoScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id: 'id',
    dataPedido: 'dataPedido',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clienteCpf: 'clienteCpf',
    bibliotecarioId: 'bibliotecarioId',
    livrosId: 'livrosId'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nome?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    senha?: StringFilter<"Cliente"> | string
    cpf?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    emprestimos?: EmprestimoListRelationFilter
    reservas?: ReservaListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emprestimos?: EmprestimoOrderByRelationAggregateInput
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    senha?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    emprestimos?: EmprestimoListRelationFilter
    reservas?: ReservaListRelationFilter
  }, "id" | "email" | "cpf">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    senha?: StringWithAggregatesFilter<"Cliente"> | string
    cpf?: StringWithAggregatesFilter<"Cliente"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type BibliotecarioWhereInput = {
    AND?: BibliotecarioWhereInput | BibliotecarioWhereInput[]
    OR?: BibliotecarioWhereInput[]
    NOT?: BibliotecarioWhereInput | BibliotecarioWhereInput[]
    id?: IntFilter<"Bibliotecario"> | number
    nome?: StringFilter<"Bibliotecario"> | string
    email?: StringFilter<"Bibliotecario"> | string
    senha?: StringFilter<"Bibliotecario"> | string
    cpf?: StringFilter<"Bibliotecario"> | string
    createdAt?: DateTimeFilter<"Bibliotecario"> | Date | string
    updatedAt?: DateTimeFilter<"Bibliotecario"> | Date | string
    emprestimos?: EmprestimoListRelationFilter
    reservas?: ReservaListRelationFilter
  }

  export type BibliotecarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emprestimos?: EmprestimoOrderByRelationAggregateInput
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type BibliotecarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: BibliotecarioWhereInput | BibliotecarioWhereInput[]
    OR?: BibliotecarioWhereInput[]
    NOT?: BibliotecarioWhereInput | BibliotecarioWhereInput[]
    nome?: StringFilter<"Bibliotecario"> | string
    senha?: StringFilter<"Bibliotecario"> | string
    createdAt?: DateTimeFilter<"Bibliotecario"> | Date | string
    updatedAt?: DateTimeFilter<"Bibliotecario"> | Date | string
    emprestimos?: EmprestimoListRelationFilter
    reservas?: ReservaListRelationFilter
  }, "id" | "email" | "cpf">

  export type BibliotecarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BibliotecarioCountOrderByAggregateInput
    _avg?: BibliotecarioAvgOrderByAggregateInput
    _max?: BibliotecarioMaxOrderByAggregateInput
    _min?: BibliotecarioMinOrderByAggregateInput
    _sum?: BibliotecarioSumOrderByAggregateInput
  }

  export type BibliotecarioScalarWhereWithAggregatesInput = {
    AND?: BibliotecarioScalarWhereWithAggregatesInput | BibliotecarioScalarWhereWithAggregatesInput[]
    OR?: BibliotecarioScalarWhereWithAggregatesInput[]
    NOT?: BibliotecarioScalarWhereWithAggregatesInput | BibliotecarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bibliotecario"> | number
    nome?: StringWithAggregatesFilter<"Bibliotecario"> | string
    email?: StringWithAggregatesFilter<"Bibliotecario"> | string
    senha?: StringWithAggregatesFilter<"Bibliotecario"> | string
    cpf?: StringWithAggregatesFilter<"Bibliotecario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bibliotecario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bibliotecario"> | Date | string
  }

  export type LivrosWhereInput = {
    AND?: LivrosWhereInput | LivrosWhereInput[]
    OR?: LivrosWhereInput[]
    NOT?: LivrosWhereInput | LivrosWhereInput[]
    id?: IntFilter<"Livros"> | number
    titulo?: StringFilter<"Livros"> | string
    descricao?: StringFilter<"Livros"> | string
    genero?: StringFilter<"Livros"> | string
    status?: BoolFilter<"Livros"> | boolean
    quantidade?: IntFilter<"Livros"> | number
    createdAt?: DateTimeFilter<"Livros"> | Date | string
    updatedAt?: DateTimeFilter<"Livros"> | Date | string
    emprestimos?: EmprestimoListRelationFilter
    reservas?: ReservaListRelationFilter
  }

  export type LivrosOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    genero?: SortOrder
    status?: SortOrder
    quantidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emprestimos?: EmprestimoOrderByRelationAggregateInput
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type LivrosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LivrosWhereInput | LivrosWhereInput[]
    OR?: LivrosWhereInput[]
    NOT?: LivrosWhereInput | LivrosWhereInput[]
    titulo?: StringFilter<"Livros"> | string
    descricao?: StringFilter<"Livros"> | string
    genero?: StringFilter<"Livros"> | string
    status?: BoolFilter<"Livros"> | boolean
    quantidade?: IntFilter<"Livros"> | number
    createdAt?: DateTimeFilter<"Livros"> | Date | string
    updatedAt?: DateTimeFilter<"Livros"> | Date | string
    emprestimos?: EmprestimoListRelationFilter
    reservas?: ReservaListRelationFilter
  }, "id">

  export type LivrosOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    genero?: SortOrder
    status?: SortOrder
    quantidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LivrosCountOrderByAggregateInput
    _avg?: LivrosAvgOrderByAggregateInput
    _max?: LivrosMaxOrderByAggregateInput
    _min?: LivrosMinOrderByAggregateInput
    _sum?: LivrosSumOrderByAggregateInput
  }

  export type LivrosScalarWhereWithAggregatesInput = {
    AND?: LivrosScalarWhereWithAggregatesInput | LivrosScalarWhereWithAggregatesInput[]
    OR?: LivrosScalarWhereWithAggregatesInput[]
    NOT?: LivrosScalarWhereWithAggregatesInput | LivrosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Livros"> | number
    titulo?: StringWithAggregatesFilter<"Livros"> | string
    descricao?: StringWithAggregatesFilter<"Livros"> | string
    genero?: StringWithAggregatesFilter<"Livros"> | string
    status?: BoolWithAggregatesFilter<"Livros"> | boolean
    quantidade?: IntWithAggregatesFilter<"Livros"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Livros"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Livros"> | Date | string
  }

  export type EmprestimoWhereInput = {
    AND?: EmprestimoWhereInput | EmprestimoWhereInput[]
    OR?: EmprestimoWhereInput[]
    NOT?: EmprestimoWhereInput | EmprestimoWhereInput[]
    id?: IntFilter<"Emprestimo"> | number
    dataPedido?: DateTimeFilter<"Emprestimo"> | Date | string
    createdAt?: DateTimeFilter<"Emprestimo"> | Date | string
    updatedAt?: DateTimeFilter<"Emprestimo"> | Date | string
    clienteCpf?: StringFilter<"Emprestimo"> | string
    bibliotecarioId?: IntFilter<"Emprestimo"> | number
    livrosId?: IntFilter<"Emprestimo"> | number
    livro?: XOR<LivrosScalarRelationFilter, LivrosWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    bibliotecario?: XOR<BibliotecarioScalarRelationFilter, BibliotecarioWhereInput>
  }

  export type EmprestimoOrderByWithRelationInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteCpf?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
    livro?: LivrosOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
    bibliotecario?: BibliotecarioOrderByWithRelationInput
  }

  export type EmprestimoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmprestimoWhereInput | EmprestimoWhereInput[]
    OR?: EmprestimoWhereInput[]
    NOT?: EmprestimoWhereInput | EmprestimoWhereInput[]
    dataPedido?: DateTimeFilter<"Emprestimo"> | Date | string
    createdAt?: DateTimeFilter<"Emprestimo"> | Date | string
    updatedAt?: DateTimeFilter<"Emprestimo"> | Date | string
    clienteCpf?: StringFilter<"Emprestimo"> | string
    bibliotecarioId?: IntFilter<"Emprestimo"> | number
    livrosId?: IntFilter<"Emprestimo"> | number
    livro?: XOR<LivrosScalarRelationFilter, LivrosWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    bibliotecario?: XOR<BibliotecarioScalarRelationFilter, BibliotecarioWhereInput>
  }, "id">

  export type EmprestimoOrderByWithAggregationInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteCpf?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
    _count?: EmprestimoCountOrderByAggregateInput
    _avg?: EmprestimoAvgOrderByAggregateInput
    _max?: EmprestimoMaxOrderByAggregateInput
    _min?: EmprestimoMinOrderByAggregateInput
    _sum?: EmprestimoSumOrderByAggregateInput
  }

  export type EmprestimoScalarWhereWithAggregatesInput = {
    AND?: EmprestimoScalarWhereWithAggregatesInput | EmprestimoScalarWhereWithAggregatesInput[]
    OR?: EmprestimoScalarWhereWithAggregatesInput[]
    NOT?: EmprestimoScalarWhereWithAggregatesInput | EmprestimoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Emprestimo"> | number
    dataPedido?: DateTimeWithAggregatesFilter<"Emprestimo"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Emprestimo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Emprestimo"> | Date | string
    clienteCpf?: StringWithAggregatesFilter<"Emprestimo"> | string
    bibliotecarioId?: IntWithAggregatesFilter<"Emprestimo"> | number
    livrosId?: IntWithAggregatesFilter<"Emprestimo"> | number
  }

  export type ReservaWhereInput = {
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    id?: IntFilter<"Reserva"> | number
    dataPedido?: DateTimeFilter<"Reserva"> | Date | string
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
    clienteCpf?: StringFilter<"Reserva"> | string
    bibliotecarioId?: IntFilter<"Reserva"> | number
    livrosId?: IntFilter<"Reserva"> | number
    livro?: XOR<LivrosScalarRelationFilter, LivrosWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    bibliotecario?: XOR<BibliotecarioScalarRelationFilter, BibliotecarioWhereInput>
  }

  export type ReservaOrderByWithRelationInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteCpf?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
    livro?: LivrosOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
    bibliotecario?: BibliotecarioOrderByWithRelationInput
  }

  export type ReservaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    dataPedido?: DateTimeFilter<"Reserva"> | Date | string
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
    clienteCpf?: StringFilter<"Reserva"> | string
    bibliotecarioId?: IntFilter<"Reserva"> | number
    livrosId?: IntFilter<"Reserva"> | number
    livro?: XOR<LivrosScalarRelationFilter, LivrosWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    bibliotecario?: XOR<BibliotecarioScalarRelationFilter, BibliotecarioWhereInput>
  }, "id">

  export type ReservaOrderByWithAggregationInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteCpf?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
    _count?: ReservaCountOrderByAggregateInput
    _avg?: ReservaAvgOrderByAggregateInput
    _max?: ReservaMaxOrderByAggregateInput
    _min?: ReservaMinOrderByAggregateInput
    _sum?: ReservaSumOrderByAggregateInput
  }

  export type ReservaScalarWhereWithAggregatesInput = {
    AND?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    OR?: ReservaScalarWhereWithAggregatesInput[]
    NOT?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reserva"> | number
    dataPedido?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    clienteCpf?: StringWithAggregatesFilter<"Reserva"> | string
    bibliotecarioId?: IntWithAggregatesFilter<"Reserva"> | number
    livrosId?: IntWithAggregatesFilter<"Reserva"> | number
  }

  export type ClienteCreateInput = {
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoCreateNestedManyWithoutClienteInput
    reservas?: ReservaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutClienteInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUpdateManyWithoutClienteNestedInput
    reservas?: ReservaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutClienteNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BibliotecarioCreateInput = {
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoCreateNestedManyWithoutBibliotecarioInput
    reservas?: ReservaCreateNestedManyWithoutBibliotecarioInput
  }

  export type BibliotecarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutBibliotecarioInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutBibliotecarioInput
  }

  export type BibliotecarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUpdateManyWithoutBibliotecarioNestedInput
    reservas?: ReservaUpdateManyWithoutBibliotecarioNestedInput
  }

  export type BibliotecarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutBibliotecarioNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutBibliotecarioNestedInput
  }

  export type BibliotecarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BibliotecarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BibliotecarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LivrosCreateInput = {
    titulo: string
    descricao: string
    genero: string
    status: boolean
    quantidade: number
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoCreateNestedManyWithoutLivroInput
    reservas?: ReservaCreateNestedManyWithoutLivroInput
  }

  export type LivrosUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao: string
    genero: string
    status: boolean
    quantidade: number
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutLivroInput
    reservas?: ReservaUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivrosUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUpdateManyWithoutLivroNestedInput
    reservas?: ReservaUpdateManyWithoutLivroNestedInput
  }

  export type LivrosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutLivroNestedInput
    reservas?: ReservaUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type LivrosCreateManyInput = {
    id?: number
    titulo: string
    descricao: string
    genero: string
    status: boolean
    quantidade: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LivrosUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LivrosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmprestimoCreateInput = {
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    livro: LivrosCreateNestedOneWithoutEmprestimosInput
    cliente: ClienteCreateNestedOneWithoutEmprestimosInput
    bibliotecario: BibliotecarioCreateNestedOneWithoutEmprestimosInput
  }

  export type EmprestimoUncheckedCreateInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteCpf: string
    bibliotecarioId: number
    livrosId: number
  }

  export type EmprestimoUpdateInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    livro?: LivrosUpdateOneRequiredWithoutEmprestimosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutEmprestimosNestedInput
    bibliotecario?: BibliotecarioUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type EmprestimoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    bibliotecarioId?: IntFieldUpdateOperationsInput | number
    livrosId?: IntFieldUpdateOperationsInput | number
  }

  export type EmprestimoCreateManyInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteCpf: string
    bibliotecarioId: number
    livrosId: number
  }

  export type EmprestimoUpdateManyMutationInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmprestimoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    bibliotecarioId?: IntFieldUpdateOperationsInput | number
    livrosId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservaCreateInput = {
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    livro: LivrosCreateNestedOneWithoutReservasInput
    cliente: ClienteCreateNestedOneWithoutReservasInput
    bibliotecario: BibliotecarioCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteCpf: string
    bibliotecarioId: number
    livrosId: number
  }

  export type ReservaUpdateInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    livro?: LivrosUpdateOneRequiredWithoutReservasNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    bibliotecario?: BibliotecarioUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    bibliotecarioId?: IntFieldUpdateOperationsInput | number
    livrosId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservaCreateManyInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteCpf: string
    bibliotecarioId: number
    livrosId: number
  }

  export type ReservaUpdateManyMutationInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    bibliotecarioId?: IntFieldUpdateOperationsInput | number
    livrosId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmprestimoListRelationFilter = {
    every?: EmprestimoWhereInput
    some?: EmprestimoWhereInput
    none?: EmprestimoWhereInput
  }

  export type ReservaListRelationFilter = {
    every?: ReservaWhereInput
    some?: ReservaWhereInput
    none?: ReservaWhereInput
  }

  export type EmprestimoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BibliotecarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BibliotecarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BibliotecarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BibliotecarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cpf?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BibliotecarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LivrosCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    genero?: SortOrder
    status?: SortOrder
    quantidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LivrosAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
  }

  export type LivrosMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    genero?: SortOrder
    status?: SortOrder
    quantidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LivrosMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    genero?: SortOrder
    status?: SortOrder
    quantidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LivrosSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LivrosScalarRelationFilter = {
    is?: LivrosWhereInput
    isNot?: LivrosWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type BibliotecarioScalarRelationFilter = {
    is?: BibliotecarioWhereInput
    isNot?: BibliotecarioWhereInput
  }

  export type EmprestimoCountOrderByAggregateInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteCpf?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
  }

  export type EmprestimoAvgOrderByAggregateInput = {
    id?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
  }

  export type EmprestimoMaxOrderByAggregateInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteCpf?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
  }

  export type EmprestimoMinOrderByAggregateInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteCpf?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
  }

  export type EmprestimoSumOrderByAggregateInput = {
    id?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
  }

  export type ReservaCountOrderByAggregateInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteCpf?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
  }

  export type ReservaAvgOrderByAggregateInput = {
    id?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
  }

  export type ReservaMaxOrderByAggregateInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteCpf?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
  }

  export type ReservaMinOrderByAggregateInput = {
    id?: SortOrder
    dataPedido?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clienteCpf?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
  }

  export type ReservaSumOrderByAggregateInput = {
    id?: SortOrder
    bibliotecarioId?: SortOrder
    livrosId?: SortOrder
  }

  export type EmprestimoCreateNestedManyWithoutClienteInput = {
    create?: XOR<EmprestimoCreateWithoutClienteInput, EmprestimoUncheckedCreateWithoutClienteInput> | EmprestimoCreateWithoutClienteInput[] | EmprestimoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutClienteInput | EmprestimoCreateOrConnectWithoutClienteInput[]
    createMany?: EmprestimoCreateManyClienteInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type ReservaCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type EmprestimoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<EmprestimoCreateWithoutClienteInput, EmprestimoUncheckedCreateWithoutClienteInput> | EmprestimoCreateWithoutClienteInput[] | EmprestimoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutClienteInput | EmprestimoCreateOrConnectWithoutClienteInput[]
    createMany?: EmprestimoCreateManyClienteInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmprestimoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EmprestimoCreateWithoutClienteInput, EmprestimoUncheckedCreateWithoutClienteInput> | EmprestimoCreateWithoutClienteInput[] | EmprestimoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutClienteInput | EmprestimoCreateOrConnectWithoutClienteInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutClienteInput | EmprestimoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EmprestimoCreateManyClienteInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutClienteInput | EmprestimoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutClienteInput | EmprestimoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type ReservaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutClienteInput | ReservaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutClienteInput | ReservaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutClienteInput | ReservaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmprestimoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EmprestimoCreateWithoutClienteInput, EmprestimoUncheckedCreateWithoutClienteInput> | EmprestimoCreateWithoutClienteInput[] | EmprestimoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutClienteInput | EmprestimoCreateOrConnectWithoutClienteInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutClienteInput | EmprestimoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EmprestimoCreateManyClienteInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutClienteInput | EmprestimoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutClienteInput | EmprestimoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutClienteInput | ReservaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutClienteInput | ReservaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutClienteInput | ReservaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type EmprestimoCreateNestedManyWithoutBibliotecarioInput = {
    create?: XOR<EmprestimoCreateWithoutBibliotecarioInput, EmprestimoUncheckedCreateWithoutBibliotecarioInput> | EmprestimoCreateWithoutBibliotecarioInput[] | EmprestimoUncheckedCreateWithoutBibliotecarioInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutBibliotecarioInput | EmprestimoCreateOrConnectWithoutBibliotecarioInput[]
    createMany?: EmprestimoCreateManyBibliotecarioInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type ReservaCreateNestedManyWithoutBibliotecarioInput = {
    create?: XOR<ReservaCreateWithoutBibliotecarioInput, ReservaUncheckedCreateWithoutBibliotecarioInput> | ReservaCreateWithoutBibliotecarioInput[] | ReservaUncheckedCreateWithoutBibliotecarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutBibliotecarioInput | ReservaCreateOrConnectWithoutBibliotecarioInput[]
    createMany?: ReservaCreateManyBibliotecarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type EmprestimoUncheckedCreateNestedManyWithoutBibliotecarioInput = {
    create?: XOR<EmprestimoCreateWithoutBibliotecarioInput, EmprestimoUncheckedCreateWithoutBibliotecarioInput> | EmprestimoCreateWithoutBibliotecarioInput[] | EmprestimoUncheckedCreateWithoutBibliotecarioInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutBibliotecarioInput | EmprestimoCreateOrConnectWithoutBibliotecarioInput[]
    createMany?: EmprestimoCreateManyBibliotecarioInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutBibliotecarioInput = {
    create?: XOR<ReservaCreateWithoutBibliotecarioInput, ReservaUncheckedCreateWithoutBibliotecarioInput> | ReservaCreateWithoutBibliotecarioInput[] | ReservaUncheckedCreateWithoutBibliotecarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutBibliotecarioInput | ReservaCreateOrConnectWithoutBibliotecarioInput[]
    createMany?: ReservaCreateManyBibliotecarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type EmprestimoUpdateManyWithoutBibliotecarioNestedInput = {
    create?: XOR<EmprestimoCreateWithoutBibliotecarioInput, EmprestimoUncheckedCreateWithoutBibliotecarioInput> | EmprestimoCreateWithoutBibliotecarioInput[] | EmprestimoUncheckedCreateWithoutBibliotecarioInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutBibliotecarioInput | EmprestimoCreateOrConnectWithoutBibliotecarioInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutBibliotecarioInput | EmprestimoUpsertWithWhereUniqueWithoutBibliotecarioInput[]
    createMany?: EmprestimoCreateManyBibliotecarioInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutBibliotecarioInput | EmprestimoUpdateWithWhereUniqueWithoutBibliotecarioInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutBibliotecarioInput | EmprestimoUpdateManyWithWhereWithoutBibliotecarioInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type ReservaUpdateManyWithoutBibliotecarioNestedInput = {
    create?: XOR<ReservaCreateWithoutBibliotecarioInput, ReservaUncheckedCreateWithoutBibliotecarioInput> | ReservaCreateWithoutBibliotecarioInput[] | ReservaUncheckedCreateWithoutBibliotecarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutBibliotecarioInput | ReservaCreateOrConnectWithoutBibliotecarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutBibliotecarioInput | ReservaUpsertWithWhereUniqueWithoutBibliotecarioInput[]
    createMany?: ReservaCreateManyBibliotecarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutBibliotecarioInput | ReservaUpdateWithWhereUniqueWithoutBibliotecarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutBibliotecarioInput | ReservaUpdateManyWithWhereWithoutBibliotecarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type EmprestimoUncheckedUpdateManyWithoutBibliotecarioNestedInput = {
    create?: XOR<EmprestimoCreateWithoutBibliotecarioInput, EmprestimoUncheckedCreateWithoutBibliotecarioInput> | EmprestimoCreateWithoutBibliotecarioInput[] | EmprestimoUncheckedCreateWithoutBibliotecarioInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutBibliotecarioInput | EmprestimoCreateOrConnectWithoutBibliotecarioInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutBibliotecarioInput | EmprestimoUpsertWithWhereUniqueWithoutBibliotecarioInput[]
    createMany?: EmprestimoCreateManyBibliotecarioInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutBibliotecarioInput | EmprestimoUpdateWithWhereUniqueWithoutBibliotecarioInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutBibliotecarioInput | EmprestimoUpdateManyWithWhereWithoutBibliotecarioInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutBibliotecarioNestedInput = {
    create?: XOR<ReservaCreateWithoutBibliotecarioInput, ReservaUncheckedCreateWithoutBibliotecarioInput> | ReservaCreateWithoutBibliotecarioInput[] | ReservaUncheckedCreateWithoutBibliotecarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutBibliotecarioInput | ReservaCreateOrConnectWithoutBibliotecarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutBibliotecarioInput | ReservaUpsertWithWhereUniqueWithoutBibliotecarioInput[]
    createMany?: ReservaCreateManyBibliotecarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutBibliotecarioInput | ReservaUpdateWithWhereUniqueWithoutBibliotecarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutBibliotecarioInput | ReservaUpdateManyWithWhereWithoutBibliotecarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type EmprestimoCreateNestedManyWithoutLivroInput = {
    create?: XOR<EmprestimoCreateWithoutLivroInput, EmprestimoUncheckedCreateWithoutLivroInput> | EmprestimoCreateWithoutLivroInput[] | EmprestimoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutLivroInput | EmprestimoCreateOrConnectWithoutLivroInput[]
    createMany?: EmprestimoCreateManyLivroInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type ReservaCreateNestedManyWithoutLivroInput = {
    create?: XOR<ReservaCreateWithoutLivroInput, ReservaUncheckedCreateWithoutLivroInput> | ReservaCreateWithoutLivroInput[] | ReservaUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutLivroInput | ReservaCreateOrConnectWithoutLivroInput[]
    createMany?: ReservaCreateManyLivroInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type EmprestimoUncheckedCreateNestedManyWithoutLivroInput = {
    create?: XOR<EmprestimoCreateWithoutLivroInput, EmprestimoUncheckedCreateWithoutLivroInput> | EmprestimoCreateWithoutLivroInput[] | EmprestimoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutLivroInput | EmprestimoCreateOrConnectWithoutLivroInput[]
    createMany?: EmprestimoCreateManyLivroInputEnvelope
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutLivroInput = {
    create?: XOR<ReservaCreateWithoutLivroInput, ReservaUncheckedCreateWithoutLivroInput> | ReservaCreateWithoutLivroInput[] | ReservaUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutLivroInput | ReservaCreateOrConnectWithoutLivroInput[]
    createMany?: ReservaCreateManyLivroInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EmprestimoUpdateManyWithoutLivroNestedInput = {
    create?: XOR<EmprestimoCreateWithoutLivroInput, EmprestimoUncheckedCreateWithoutLivroInput> | EmprestimoCreateWithoutLivroInput[] | EmprestimoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutLivroInput | EmprestimoCreateOrConnectWithoutLivroInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutLivroInput | EmprestimoUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: EmprestimoCreateManyLivroInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutLivroInput | EmprestimoUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutLivroInput | EmprestimoUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type ReservaUpdateManyWithoutLivroNestedInput = {
    create?: XOR<ReservaCreateWithoutLivroInput, ReservaUncheckedCreateWithoutLivroInput> | ReservaCreateWithoutLivroInput[] | ReservaUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutLivroInput | ReservaCreateOrConnectWithoutLivroInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutLivroInput | ReservaUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: ReservaCreateManyLivroInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutLivroInput | ReservaUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutLivroInput | ReservaUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type EmprestimoUncheckedUpdateManyWithoutLivroNestedInput = {
    create?: XOR<EmprestimoCreateWithoutLivroInput, EmprestimoUncheckedCreateWithoutLivroInput> | EmprestimoCreateWithoutLivroInput[] | EmprestimoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: EmprestimoCreateOrConnectWithoutLivroInput | EmprestimoCreateOrConnectWithoutLivroInput[]
    upsert?: EmprestimoUpsertWithWhereUniqueWithoutLivroInput | EmprestimoUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: EmprestimoCreateManyLivroInputEnvelope
    set?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    disconnect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    delete?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    connect?: EmprestimoWhereUniqueInput | EmprestimoWhereUniqueInput[]
    update?: EmprestimoUpdateWithWhereUniqueWithoutLivroInput | EmprestimoUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: EmprestimoUpdateManyWithWhereWithoutLivroInput | EmprestimoUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutLivroNestedInput = {
    create?: XOR<ReservaCreateWithoutLivroInput, ReservaUncheckedCreateWithoutLivroInput> | ReservaCreateWithoutLivroInput[] | ReservaUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutLivroInput | ReservaCreateOrConnectWithoutLivroInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutLivroInput | ReservaUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: ReservaCreateManyLivroInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutLivroInput | ReservaUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutLivroInput | ReservaUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type LivrosCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<LivrosCreateWithoutEmprestimosInput, LivrosUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: LivrosCreateOrConnectWithoutEmprestimosInput
    connect?: LivrosWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<ClienteCreateWithoutEmprestimosInput, ClienteUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEmprestimosInput
    connect?: ClienteWhereUniqueInput
  }

  export type BibliotecarioCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<BibliotecarioCreateWithoutEmprestimosInput, BibliotecarioUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: BibliotecarioCreateOrConnectWithoutEmprestimosInput
    connect?: BibliotecarioWhereUniqueInput
  }

  export type LivrosUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<LivrosCreateWithoutEmprestimosInput, LivrosUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: LivrosCreateOrConnectWithoutEmprestimosInput
    upsert?: LivrosUpsertWithoutEmprestimosInput
    connect?: LivrosWhereUniqueInput
    update?: XOR<XOR<LivrosUpdateToOneWithWhereWithoutEmprestimosInput, LivrosUpdateWithoutEmprestimosInput>, LivrosUncheckedUpdateWithoutEmprestimosInput>
  }

  export type ClienteUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<ClienteCreateWithoutEmprestimosInput, ClienteUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEmprestimosInput
    upsert?: ClienteUpsertWithoutEmprestimosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutEmprestimosInput, ClienteUpdateWithoutEmprestimosInput>, ClienteUncheckedUpdateWithoutEmprestimosInput>
  }

  export type BibliotecarioUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<BibliotecarioCreateWithoutEmprestimosInput, BibliotecarioUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: BibliotecarioCreateOrConnectWithoutEmprestimosInput
    upsert?: BibliotecarioUpsertWithoutEmprestimosInput
    connect?: BibliotecarioWhereUniqueInput
    update?: XOR<XOR<BibliotecarioUpdateToOneWithWhereWithoutEmprestimosInput, BibliotecarioUpdateWithoutEmprestimosInput>, BibliotecarioUncheckedUpdateWithoutEmprestimosInput>
  }

  export type LivrosCreateNestedOneWithoutReservasInput = {
    create?: XOR<LivrosCreateWithoutReservasInput, LivrosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: LivrosCreateOrConnectWithoutReservasInput
    connect?: LivrosWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutReservasInput = {
    create?: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutReservasInput
    connect?: ClienteWhereUniqueInput
  }

  export type BibliotecarioCreateNestedOneWithoutReservasInput = {
    create?: XOR<BibliotecarioCreateWithoutReservasInput, BibliotecarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: BibliotecarioCreateOrConnectWithoutReservasInput
    connect?: BibliotecarioWhereUniqueInput
  }

  export type LivrosUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<LivrosCreateWithoutReservasInput, LivrosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: LivrosCreateOrConnectWithoutReservasInput
    upsert?: LivrosUpsertWithoutReservasInput
    connect?: LivrosWhereUniqueInput
    update?: XOR<XOR<LivrosUpdateToOneWithWhereWithoutReservasInput, LivrosUpdateWithoutReservasInput>, LivrosUncheckedUpdateWithoutReservasInput>
  }

  export type ClienteUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutReservasInput
    upsert?: ClienteUpsertWithoutReservasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutReservasInput, ClienteUpdateWithoutReservasInput>, ClienteUncheckedUpdateWithoutReservasInput>
  }

  export type BibliotecarioUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<BibliotecarioCreateWithoutReservasInput, BibliotecarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: BibliotecarioCreateOrConnectWithoutReservasInput
    upsert?: BibliotecarioUpsertWithoutReservasInput
    connect?: BibliotecarioWhereUniqueInput
    update?: XOR<XOR<BibliotecarioUpdateToOneWithWhereWithoutReservasInput, BibliotecarioUpdateWithoutReservasInput>, BibliotecarioUncheckedUpdateWithoutReservasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EmprestimoCreateWithoutClienteInput = {
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    livro: LivrosCreateNestedOneWithoutEmprestimosInput
    bibliotecario: BibliotecarioCreateNestedOneWithoutEmprestimosInput
  }

  export type EmprestimoUncheckedCreateWithoutClienteInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    bibliotecarioId: number
    livrosId: number
  }

  export type EmprestimoCreateOrConnectWithoutClienteInput = {
    where: EmprestimoWhereUniqueInput
    create: XOR<EmprestimoCreateWithoutClienteInput, EmprestimoUncheckedCreateWithoutClienteInput>
  }

  export type EmprestimoCreateManyClienteInputEnvelope = {
    data: EmprestimoCreateManyClienteInput | EmprestimoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ReservaCreateWithoutClienteInput = {
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    livro: LivrosCreateNestedOneWithoutReservasInput
    bibliotecario: BibliotecarioCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutClienteInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    bibliotecarioId: number
    livrosId: number
  }

  export type ReservaCreateOrConnectWithoutClienteInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput>
  }

  export type ReservaCreateManyClienteInputEnvelope = {
    data: ReservaCreateManyClienteInput | ReservaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type EmprestimoUpsertWithWhereUniqueWithoutClienteInput = {
    where: EmprestimoWhereUniqueInput
    update: XOR<EmprestimoUpdateWithoutClienteInput, EmprestimoUncheckedUpdateWithoutClienteInput>
    create: XOR<EmprestimoCreateWithoutClienteInput, EmprestimoUncheckedCreateWithoutClienteInput>
  }

  export type EmprestimoUpdateWithWhereUniqueWithoutClienteInput = {
    where: EmprestimoWhereUniqueInput
    data: XOR<EmprestimoUpdateWithoutClienteInput, EmprestimoUncheckedUpdateWithoutClienteInput>
  }

  export type EmprestimoUpdateManyWithWhereWithoutClienteInput = {
    where: EmprestimoScalarWhereInput
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyWithoutClienteInput>
  }

  export type EmprestimoScalarWhereInput = {
    AND?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
    OR?: EmprestimoScalarWhereInput[]
    NOT?: EmprestimoScalarWhereInput | EmprestimoScalarWhereInput[]
    id?: IntFilter<"Emprestimo"> | number
    dataPedido?: DateTimeFilter<"Emprestimo"> | Date | string
    createdAt?: DateTimeFilter<"Emprestimo"> | Date | string
    updatedAt?: DateTimeFilter<"Emprestimo"> | Date | string
    clienteCpf?: StringFilter<"Emprestimo"> | string
    bibliotecarioId?: IntFilter<"Emprestimo"> | number
    livrosId?: IntFilter<"Emprestimo"> | number
  }

  export type ReservaUpsertWithWhereUniqueWithoutClienteInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutClienteInput, ReservaUncheckedUpdateWithoutClienteInput>
    create: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutClienteInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutClienteInput, ReservaUncheckedUpdateWithoutClienteInput>
  }

  export type ReservaUpdateManyWithWhereWithoutClienteInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutClienteInput>
  }

  export type ReservaScalarWhereInput = {
    AND?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    OR?: ReservaScalarWhereInput[]
    NOT?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    id?: IntFilter<"Reserva"> | number
    dataPedido?: DateTimeFilter<"Reserva"> | Date | string
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
    clienteCpf?: StringFilter<"Reserva"> | string
    bibliotecarioId?: IntFilter<"Reserva"> | number
    livrosId?: IntFilter<"Reserva"> | number
  }

  export type EmprestimoCreateWithoutBibliotecarioInput = {
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    livro: LivrosCreateNestedOneWithoutEmprestimosInput
    cliente: ClienteCreateNestedOneWithoutEmprestimosInput
  }

  export type EmprestimoUncheckedCreateWithoutBibliotecarioInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteCpf: string
    livrosId: number
  }

  export type EmprestimoCreateOrConnectWithoutBibliotecarioInput = {
    where: EmprestimoWhereUniqueInput
    create: XOR<EmprestimoCreateWithoutBibliotecarioInput, EmprestimoUncheckedCreateWithoutBibliotecarioInput>
  }

  export type EmprestimoCreateManyBibliotecarioInputEnvelope = {
    data: EmprestimoCreateManyBibliotecarioInput | EmprestimoCreateManyBibliotecarioInput[]
    skipDuplicates?: boolean
  }

  export type ReservaCreateWithoutBibliotecarioInput = {
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    livro: LivrosCreateNestedOneWithoutReservasInput
    cliente: ClienteCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutBibliotecarioInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteCpf: string
    livrosId: number
  }

  export type ReservaCreateOrConnectWithoutBibliotecarioInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutBibliotecarioInput, ReservaUncheckedCreateWithoutBibliotecarioInput>
  }

  export type ReservaCreateManyBibliotecarioInputEnvelope = {
    data: ReservaCreateManyBibliotecarioInput | ReservaCreateManyBibliotecarioInput[]
    skipDuplicates?: boolean
  }

  export type EmprestimoUpsertWithWhereUniqueWithoutBibliotecarioInput = {
    where: EmprestimoWhereUniqueInput
    update: XOR<EmprestimoUpdateWithoutBibliotecarioInput, EmprestimoUncheckedUpdateWithoutBibliotecarioInput>
    create: XOR<EmprestimoCreateWithoutBibliotecarioInput, EmprestimoUncheckedCreateWithoutBibliotecarioInput>
  }

  export type EmprestimoUpdateWithWhereUniqueWithoutBibliotecarioInput = {
    where: EmprestimoWhereUniqueInput
    data: XOR<EmprestimoUpdateWithoutBibliotecarioInput, EmprestimoUncheckedUpdateWithoutBibliotecarioInput>
  }

  export type EmprestimoUpdateManyWithWhereWithoutBibliotecarioInput = {
    where: EmprestimoScalarWhereInput
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyWithoutBibliotecarioInput>
  }

  export type ReservaUpsertWithWhereUniqueWithoutBibliotecarioInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutBibliotecarioInput, ReservaUncheckedUpdateWithoutBibliotecarioInput>
    create: XOR<ReservaCreateWithoutBibliotecarioInput, ReservaUncheckedCreateWithoutBibliotecarioInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutBibliotecarioInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutBibliotecarioInput, ReservaUncheckedUpdateWithoutBibliotecarioInput>
  }

  export type ReservaUpdateManyWithWhereWithoutBibliotecarioInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutBibliotecarioInput>
  }

  export type EmprestimoCreateWithoutLivroInput = {
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutEmprestimosInput
    bibliotecario: BibliotecarioCreateNestedOneWithoutEmprestimosInput
  }

  export type EmprestimoUncheckedCreateWithoutLivroInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteCpf: string
    bibliotecarioId: number
  }

  export type EmprestimoCreateOrConnectWithoutLivroInput = {
    where: EmprestimoWhereUniqueInput
    create: XOR<EmprestimoCreateWithoutLivroInput, EmprestimoUncheckedCreateWithoutLivroInput>
  }

  export type EmprestimoCreateManyLivroInputEnvelope = {
    data: EmprestimoCreateManyLivroInput | EmprestimoCreateManyLivroInput[]
    skipDuplicates?: boolean
  }

  export type ReservaCreateWithoutLivroInput = {
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutReservasInput
    bibliotecario: BibliotecarioCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutLivroInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteCpf: string
    bibliotecarioId: number
  }

  export type ReservaCreateOrConnectWithoutLivroInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutLivroInput, ReservaUncheckedCreateWithoutLivroInput>
  }

  export type ReservaCreateManyLivroInputEnvelope = {
    data: ReservaCreateManyLivroInput | ReservaCreateManyLivroInput[]
    skipDuplicates?: boolean
  }

  export type EmprestimoUpsertWithWhereUniqueWithoutLivroInput = {
    where: EmprestimoWhereUniqueInput
    update: XOR<EmprestimoUpdateWithoutLivroInput, EmprestimoUncheckedUpdateWithoutLivroInput>
    create: XOR<EmprestimoCreateWithoutLivroInput, EmprestimoUncheckedCreateWithoutLivroInput>
  }

  export type EmprestimoUpdateWithWhereUniqueWithoutLivroInput = {
    where: EmprestimoWhereUniqueInput
    data: XOR<EmprestimoUpdateWithoutLivroInput, EmprestimoUncheckedUpdateWithoutLivroInput>
  }

  export type EmprestimoUpdateManyWithWhereWithoutLivroInput = {
    where: EmprestimoScalarWhereInput
    data: XOR<EmprestimoUpdateManyMutationInput, EmprestimoUncheckedUpdateManyWithoutLivroInput>
  }

  export type ReservaUpsertWithWhereUniqueWithoutLivroInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutLivroInput, ReservaUncheckedUpdateWithoutLivroInput>
    create: XOR<ReservaCreateWithoutLivroInput, ReservaUncheckedCreateWithoutLivroInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutLivroInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutLivroInput, ReservaUncheckedUpdateWithoutLivroInput>
  }

  export type ReservaUpdateManyWithWhereWithoutLivroInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutLivroInput>
  }

  export type LivrosCreateWithoutEmprestimosInput = {
    titulo: string
    descricao: string
    genero: string
    status: boolean
    quantidade: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutLivroInput
  }

  export type LivrosUncheckedCreateWithoutEmprestimosInput = {
    id?: number
    titulo: string
    descricao: string
    genero: string
    status: boolean
    quantidade: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivrosCreateOrConnectWithoutEmprestimosInput = {
    where: LivrosWhereUniqueInput
    create: XOR<LivrosCreateWithoutEmprestimosInput, LivrosUncheckedCreateWithoutEmprestimosInput>
  }

  export type ClienteCreateWithoutEmprestimosInput = {
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutEmprestimosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutEmprestimosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutEmprestimosInput, ClienteUncheckedCreateWithoutEmprestimosInput>
  }

  export type BibliotecarioCreateWithoutEmprestimosInput = {
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutBibliotecarioInput
  }

  export type BibliotecarioUncheckedCreateWithoutEmprestimosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutBibliotecarioInput
  }

  export type BibliotecarioCreateOrConnectWithoutEmprestimosInput = {
    where: BibliotecarioWhereUniqueInput
    create: XOR<BibliotecarioCreateWithoutEmprestimosInput, BibliotecarioUncheckedCreateWithoutEmprestimosInput>
  }

  export type LivrosUpsertWithoutEmprestimosInput = {
    update: XOR<LivrosUpdateWithoutEmprestimosInput, LivrosUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<LivrosCreateWithoutEmprestimosInput, LivrosUncheckedCreateWithoutEmprestimosInput>
    where?: LivrosWhereInput
  }

  export type LivrosUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: LivrosWhereInput
    data: XOR<LivrosUpdateWithoutEmprestimosInput, LivrosUncheckedUpdateWithoutEmprestimosInput>
  }

  export type LivrosUpdateWithoutEmprestimosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutLivroNestedInput
  }

  export type LivrosUncheckedUpdateWithoutEmprestimosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type ClienteUpsertWithoutEmprestimosInput = {
    update: XOR<ClienteUpdateWithoutEmprestimosInput, ClienteUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<ClienteCreateWithoutEmprestimosInput, ClienteUncheckedCreateWithoutEmprestimosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutEmprestimosInput, ClienteUncheckedUpdateWithoutEmprestimosInput>
  }

  export type ClienteUpdateWithoutEmprestimosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutEmprestimosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type BibliotecarioUpsertWithoutEmprestimosInput = {
    update: XOR<BibliotecarioUpdateWithoutEmprestimosInput, BibliotecarioUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<BibliotecarioCreateWithoutEmprestimosInput, BibliotecarioUncheckedCreateWithoutEmprestimosInput>
    where?: BibliotecarioWhereInput
  }

  export type BibliotecarioUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: BibliotecarioWhereInput
    data: XOR<BibliotecarioUpdateWithoutEmprestimosInput, BibliotecarioUncheckedUpdateWithoutEmprestimosInput>
  }

  export type BibliotecarioUpdateWithoutEmprestimosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutBibliotecarioNestedInput
  }

  export type BibliotecarioUncheckedUpdateWithoutEmprestimosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutBibliotecarioNestedInput
  }

  export type LivrosCreateWithoutReservasInput = {
    titulo: string
    descricao: string
    genero: string
    status: boolean
    quantidade: number
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoCreateNestedManyWithoutLivroInput
  }

  export type LivrosUncheckedCreateWithoutReservasInput = {
    id?: number
    titulo: string
    descricao: string
    genero: string
    status: boolean
    quantidade: number
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivrosCreateOrConnectWithoutReservasInput = {
    where: LivrosWhereUniqueInput
    create: XOR<LivrosCreateWithoutReservasInput, LivrosUncheckedCreateWithoutReservasInput>
  }

  export type ClienteCreateWithoutReservasInput = {
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutReservasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutReservasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
  }

  export type BibliotecarioCreateWithoutReservasInput = {
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoCreateNestedManyWithoutBibliotecarioInput
  }

  export type BibliotecarioUncheckedCreateWithoutReservasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cpf: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emprestimos?: EmprestimoUncheckedCreateNestedManyWithoutBibliotecarioInput
  }

  export type BibliotecarioCreateOrConnectWithoutReservasInput = {
    where: BibliotecarioWhereUniqueInput
    create: XOR<BibliotecarioCreateWithoutReservasInput, BibliotecarioUncheckedCreateWithoutReservasInput>
  }

  export type LivrosUpsertWithoutReservasInput = {
    update: XOR<LivrosUpdateWithoutReservasInput, LivrosUncheckedUpdateWithoutReservasInput>
    create: XOR<LivrosCreateWithoutReservasInput, LivrosUncheckedCreateWithoutReservasInput>
    where?: LivrosWhereInput
  }

  export type LivrosUpdateToOneWithWhereWithoutReservasInput = {
    where?: LivrosWhereInput
    data: XOR<LivrosUpdateWithoutReservasInput, LivrosUncheckedUpdateWithoutReservasInput>
  }

  export type LivrosUpdateWithoutReservasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUpdateManyWithoutLivroNestedInput
  }

  export type LivrosUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    quantidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type ClienteUpsertWithoutReservasInput = {
    update: XOR<ClienteUpdateWithoutReservasInput, ClienteUncheckedUpdateWithoutReservasInput>
    create: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutReservasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutReservasInput, ClienteUncheckedUpdateWithoutReservasInput>
  }

  export type ClienteUpdateWithoutReservasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type BibliotecarioUpsertWithoutReservasInput = {
    update: XOR<BibliotecarioUpdateWithoutReservasInput, BibliotecarioUncheckedUpdateWithoutReservasInput>
    create: XOR<BibliotecarioCreateWithoutReservasInput, BibliotecarioUncheckedCreateWithoutReservasInput>
    where?: BibliotecarioWhereInput
  }

  export type BibliotecarioUpdateToOneWithWhereWithoutReservasInput = {
    where?: BibliotecarioWhereInput
    data: XOR<BibliotecarioUpdateWithoutReservasInput, BibliotecarioUncheckedUpdateWithoutReservasInput>
  }

  export type BibliotecarioUpdateWithoutReservasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUpdateManyWithoutBibliotecarioNestedInput
  }

  export type BibliotecarioUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emprestimos?: EmprestimoUncheckedUpdateManyWithoutBibliotecarioNestedInput
  }

  export type EmprestimoCreateManyClienteInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    bibliotecarioId: number
    livrosId: number
  }

  export type ReservaCreateManyClienteInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    bibliotecarioId: number
    livrosId: number
  }

  export type EmprestimoUpdateWithoutClienteInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    livro?: LivrosUpdateOneRequiredWithoutEmprestimosNestedInput
    bibliotecario?: BibliotecarioUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type EmprestimoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bibliotecarioId?: IntFieldUpdateOperationsInput | number
    livrosId?: IntFieldUpdateOperationsInput | number
  }

  export type EmprestimoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bibliotecarioId?: IntFieldUpdateOperationsInput | number
    livrosId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservaUpdateWithoutClienteInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    livro?: LivrosUpdateOneRequiredWithoutReservasNestedInput
    bibliotecario?: BibliotecarioUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bibliotecarioId?: IntFieldUpdateOperationsInput | number
    livrosId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservaUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bibliotecarioId?: IntFieldUpdateOperationsInput | number
    livrosId?: IntFieldUpdateOperationsInput | number
  }

  export type EmprestimoCreateManyBibliotecarioInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteCpf: string
    livrosId: number
  }

  export type ReservaCreateManyBibliotecarioInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteCpf: string
    livrosId: number
  }

  export type EmprestimoUpdateWithoutBibliotecarioInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    livro?: LivrosUpdateOneRequiredWithoutEmprestimosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type EmprestimoUncheckedUpdateWithoutBibliotecarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    livrosId?: IntFieldUpdateOperationsInput | number
  }

  export type EmprestimoUncheckedUpdateManyWithoutBibliotecarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    livrosId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservaUpdateWithoutBibliotecarioInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    livro?: LivrosUpdateOneRequiredWithoutReservasNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutBibliotecarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    livrosId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservaUncheckedUpdateManyWithoutBibliotecarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    livrosId?: IntFieldUpdateOperationsInput | number
  }

  export type EmprestimoCreateManyLivroInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteCpf: string
    bibliotecarioId: number
  }

  export type ReservaCreateManyLivroInput = {
    id?: number
    dataPedido: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    clienteCpf: string
    bibliotecarioId: number
  }

  export type EmprestimoUpdateWithoutLivroInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutEmprestimosNestedInput
    bibliotecario?: BibliotecarioUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type EmprestimoUncheckedUpdateWithoutLivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    bibliotecarioId?: IntFieldUpdateOperationsInput | number
  }

  export type EmprestimoUncheckedUpdateManyWithoutLivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    bibliotecarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservaUpdateWithoutLivroInput = {
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    bibliotecario?: BibliotecarioUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutLivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    bibliotecarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservaUncheckedUpdateManyWithoutLivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    bibliotecarioId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}