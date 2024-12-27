import { Image } from 'src/domain/marketplace/enterprise/entities/image';

export class ImagesPresenter {
  static toHTTP(image: Image) {
    return {
      id: image.id.toString(),
      url: image.url,
    };
  }
}
