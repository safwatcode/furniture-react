/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ProductList from "./components/ProductList";
// import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";
function Link() {
  return (
    <div>
      <div className="landing-prodcuts">
        <div class="flex flex-col min-h-[100dvh]">
          <main class="flex-1">
            <section class="w-full pt-12 md:pt-24 lg:pt-32">
              <div class="container space-y-10 xl:space-y-16">
                <div class="flex flex-col items-center space-y-4 text-center">
                  <div class="space-y-2">
                    <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                      Elevate Your Living Space
                    </h1>
                    <p class="product-landing-text mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                      Discover our premium furniture collection, crafted with
                      exceptional quality and timeless design.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <ProductList />
    </div>
  );
}

export default Link;
