import React from "react";
import { Link } from "react-router-dom";

function HowComponent() {
  return (
    <div class="alert alert-primary mt-5 mr-5 ml-5" role="alert">
      <h4 class="alert-heading">Nasıl Çalışır?</h4>
      <p class="mr-5 ml-5">
        xxxxx.com Türkiye’deki alışveriş sitelerinden satın almak istediğiniz
        ancak Kuzey Kıbrıs’a teslimatıolmayan alışverişlerinizde istediğiniz
        ürünlerinizi Kuzey Kıbrıs’taki adresinize teslim eder. xxxxx.com ‘da
        üyeliğinizi oluşturduktan sonra artık istediğiniz siteden alışveriş
        yapabilirsiniz, xxxxx.com’un özel olarak geliştirmiş olduğu ürün arama
        moturunu kullanarak istediğiniz ürünü aradığınızdaxxxxx.com size diğer
        alışveriş sitelerindeki ürünleri hangi alışveriş sitesinde olduğunu,
        fiyatını ve özelliklerini listeleyecektir.Listelenen ürünlerden
        istediğinizi seçip sepetinize ekleyebilirsiniz,Yada;diğer alışveriş
        sitelerinden beğenmiş olduğunuz ürünlerin linkini kopyalayıp xxxx.com’da
        ürün ekleme alanına yapıştırdırğınızda yine ürünün tüm özellekleri ve
        fiyatı karşınıza gelecektir artık sepetinize ekleyebilirsiniz. Ürünleri
        sepetinize eklediğinizde ürünün Alış fiyatını, Gümrük maliyetini ve
        Kargo maliyetini görebilirsiniz. Siparişi onayladığında sistemimiz size
        teslimat bilgilerini soracaktır, Teslimat bilgilerinizi de girdikten
        sonra ödemenizi Güvenli ödeme yöntemimizle online olarak yapabilirsiniz.
        Bundan sonrasında ürünleriniz tarafımızdan satın alınırak Türkiye
        depomuzda teslim alınır ve Kuzey Kıbrıs’a nakliye işlemleri
        başlatılır.Ürünleriniz Kuzey Kıbrıs’a geldikten sonra ürünleriniz tüm
        gümrük işlemleri tarafımızdan yapılarak bütüm vergileri ödenir. Ve artık
        ürünleriniz size teslim edilmek üzere anlaşmalı ada içi kurye şirketimiz
        aracılığıyla yola çıkar.
      </p>
      <hr />
      <div class="mb-0">
        <Link to="/signup">
          <button type="button" class="btn btn-primary btn-lg btn-block">
            Hemen Üye Ol!
          </button>
        </Link>
      </div>
    </div>
  );
}
export default HowComponent;
