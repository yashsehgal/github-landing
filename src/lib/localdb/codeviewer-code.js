export default function getCodeViewerCodeBlock() {
  return `<div class="position-absolute width-full color-bg-default" style="bottom: -4rem;">
        <div class="container-xl p-responsive">
            <div class="d-flex flex-justify-center flex-lg-justify-end color-bg-default">
                <div class="col-8 col-sm-7 col-md-6 col-lg-5 position-relative z-2 right-lg-n12 ">
                    <picture>
                        <source srcset=”astro-mona.webp” type=”image/webp” />
                        <img src=”astro-mona.svg” width=”960” width=”967” class=”home-astro-mona" />
                    </picture>
                </div>
            </div>
        </div>
    </div>`;
}
