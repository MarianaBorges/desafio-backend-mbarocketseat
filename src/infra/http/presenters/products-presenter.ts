import { ProductDetails } from 'src/domain/marketplace/enterprise/entities/value-objects/product-details';

import { CategoriesPresenter } from './categories-presenter';
import { SellerPresenter } from './seller-presenter';
import { ImagesPresenter } from './images-presenter';

export class ProductsPresenter {
  static toHTTP(product: ProductDetails) {
    const productCategory = CategoriesPresenter.toHTTP(product.category);
    const user = SellerPresenter.toHTTP(product.user);
    const images = product.images.map(ImagesPresenter.toHTTP);

    return {
      id: product.productId,
      title: product.title,
      description: product.desc,
      priceInCents: product.valueInCents,
      status: product.status,
      owner: user,
      category: {
        id: productCategory.id,
        title: productCategory.title,
        slug: productCategory.desc,
      },
      attachments: images,
    };
  }
}
