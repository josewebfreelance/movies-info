import { Pipe, PipeTransform } from '@angular/core';
import {IMAGES_PATH} from "../utilities/constants";

@Pipe({
  name: 'imageTransform'
})
export class ImageTransformPipe implements PipeTransform {

  transform(pathImage: string, isBg = false, sizeConfig: string = 'original', urlConfig = ''): unknown {
    if (!pathImage) return '';

    if (!isBg)
      return `${IMAGES_PATH}${sizeConfig}${pathImage}`;
    else
      return `url(${IMAGES_PATH}${sizeConfig}${pathImage}) ${urlConfig}`;
  }

}
