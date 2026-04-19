export interface IBaseRepository<
  TModel,
  TCreateInput,
  TUpdateInput,
  TWhereInput,
  TOrderByInput,
> {
  findById(id: string): Promise<TModel | null>;
  findFirst(where: TWhereInput): Promise<TModel | null>;
  findMany(args?: {
    where?: TWhereInput;
    orderBy?: TOrderByInput | TOrderByInput[];
    skip?: number;
    take?: number;
  }): Promise<TModel[]>;
  create(data: TCreateInput): Promise<TModel>;
  update(id: string, data: TUpdateInput): Promise<TModel>;
  delete(id: string): Promise<TModel>;
  count(where?: TWhereInput): Promise<number>;
}
