import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;

        await this.validateQuery(ctx);
        const sanitizedQuery = await this.sanitizeQuery(ctx);

        const entity = await strapi.entityService.findMany('api::article.article', {
            ...sanitizedQuery,
            filters: {
                $and: [
                    sanitizedQuery.filters ?? {},
                    { slug: id },
                ],
            },
            pagination: {
                page: 1,
                pageSize: 1,
            },
        });
        if (!entity || entity.length === 0) {
            return ctx.notFound('Article not found');
        }
        const sanitized = await this.sanitizeOutput(entity[0], ctx);
        return this.transformResponse(sanitized);
    },
}));
