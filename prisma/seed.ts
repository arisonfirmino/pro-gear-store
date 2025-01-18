const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
      },
    });

    const mouses = [
      {
        name: "Razer DeathAdder V2",
        slug: "razer-deathadder-v2",
        description:
          "Mouse ergonômico com sensor óptico de 20.000 DPI, switches ópticos e iluminação RGB.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737074670/ProGear%20Store/fny4j0vbhtfrwvqnxdgh.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737074670/ProGear%20Store/lx1bwsjiyske7qlf3awp.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737074670/ProGear%20Store/kucgimipafhqocfx4m2f.png",
        ],
        basePrice: 349.9,
        discountPercentage: 15,
        categoryId: mousesCategory.id,
      },
      {
        name: "Logitech G Pro X Superlight",
        slug: "logitech-g-pro-x-superlight",
        description:
          "Mouse ultraleve com tecnologia sem fio, sensor HERO 25K e design minimalista.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051026/ProGear%20Store/sglcoovwanvne57ace1o.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051027/ProGear%20Store/wipwiagnhhjszryake4t.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051027/ProGear%20Store/veo0wgqvjnhqsqnsx0zg.png",
        ],
        basePrice: 699.9,
        discountPercentage: 0,
        categoryId: mousesCategory.id,
      },
      {
        name: "Corsair Harpoon RGB Wireless",
        slug: "corsair-harpoon-rgb-wireless",
        description:
          "Mouse gamer wireless com 10.000 DPI, iluminação RGB e até 60 horas de bateria.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051027/ProGear%20Store/hca6vpbctcc7ck5tr7yb.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051027/ProGear%20Store/qcn88ri3h81xdsmbwvrr.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051027/ProGear%20Store/ohasng5uzehj0uy3xh00.png",
        ],
        basePrice: 299.9,
        discountPercentage: 10,
        categoryId: mousesCategory.id,
      },
      {
        name: "HyperX Pulsefire FPS Pro",
        slug: "hyperx-pulsefire-fps-pro",
        description:
          "Mouse com sensor Pixart 3389, até 16.000 DPI e iluminação RGB dinâmica.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051027/ProGear%20Store/z2d7v0a2qebjpni0baxk.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051028/ProGear%20Store/vjv3yps9u9fc5d9bfwow.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051026/ProGear%20Store/xmxfxkyupwr7zlsrtwjn.png",
        ],
        basePrice: 249.9,
        discountPercentage: 0,
        categoryId: mousesCategory.id,
      },
      {
        name: "SteelSeries Rival 600",
        slug: "steelseries-rival-600",
        description:
          "Mouse com sistema de pesos ajustáveis e sensor duplo de precisão.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051029/ProGear%20Store/bah8jxtmfxsk3uzjeabd.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051029/ProGear%20Store/szrfgyc3069exj4k7bd9.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051029/ProGear%20Store/zm6cxjylshakfkfh5grr.png",
        ],
        basePrice: 449.9,
        discountPercentage: 0,
        categoryId: mousesCategory.id,
      },
      {
        name: "Cooler Master MM711",
        slug: "cooler-master-mm711",
        description:
          "Mouse ultraleve com iluminação RGB e design em formato de colmeia.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051027/ProGear%20Store/qo7u2drjtvhukhthxzbt.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051026/ProGear%20Store/abloorfvs6nh0oo4ainc.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051026/ProGear%20Store/hkqowgipnoxym2oy8dxq.png",
        ],
        basePrice: 229.9,
        discountPercentage: 0,
        categoryId: mousesCategory.id,
      },
      {
        name: "Zowie EC2",
        slug: "zowie-ec2",
        description:
          "Mouse ergonômico para jogos FPS com 3.360 DPI e alta durabilidade.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051029/ProGear%20Store/trogov5playqpho6tv13.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051029/ProGear%20Store/b6wtzxcqttrknagakaog.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051030/ProGear%20Store/nodbqds9xansgzg7bf8m.png",
        ],
        basePrice: 359.9,
        discountPercentage: 5,
        categoryId: mousesCategory.id,
      },
      {
        name: "Logitech G203 Lightsync",
        slug: "logitech-g203-lightsync",
        description:
          "Mouse gamer RGB acessível, com até 8.000 DPI e três zonas de iluminação.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051028/ProGear%20Store/yx1ssvpselyaozokivc0.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051028/ProGear%20Store/jj1xfxyuwun6cjwveijd.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051028/ProGear%20Store/qfbfbn0q942bz8no2jca.png",
        ],
        basePrice: 149.9,
        discountPercentage: 0,
        categoryId: mousesCategory.id,
      },
      {
        name: "Razer Basilisk Ultimate",
        slug: "razer-basilisk-ultimate",
        description:
          "Mouse sem fio com sensor óptico de 20.000 DPI, iluminação RGB e 11 botões programáveis.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051028/ProGear%20Store/ypjsf8ezhjthrgryzta7.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051028/ProGear%20Store/k0kjp4rxlwmue6bntcgh.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051028/ProGear%20Store/ygg4yoombscr3q9lw18z.png",
        ],
        basePrice: 799.9,
        discountPercentage: 0,
        categoryId: mousesCategory.id,
      },
      {
        name: "Redragon Cobra M711",
        slug: "redragon-cobra-m711",
        description:
          "Mouse com 10.000 DPI ajustáveis, iluminação RGB e design ergonômico.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051029/ProGear%20Store/vcdxloudgrrdfi3baobb.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051029/ProGear%20Store/gdadsuodfkg2o5pbesoy.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737051029/ProGear%20Store/fokqts3nrj2qjl4kz8zp.png",
        ],
        basePrice: 159.9,
        discountPercentage: 0,
        categoryId: mousesCategory.id,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
      },
    });

    const keyboards = [
      {
        name: "Razer Huntsman V2",
        slug: "razer-huntsman-v2",
        description:
          "Teclado óptico mecânico com switches lineares e iluminação RGB Chroma.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062293/ProGear%20Store/frgvuyaqu9flqq0adkap.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062293/ProGear%20Store/xsboarzkby2z4mpv9bpa.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062293/ProGear%20Store/llb02yfr9eftqjyocbp2.png",
        ],
        basePrice: 899.9,
        discountPercentage: 0,
        categoryId: keyboardsCategory.id,
      },
      {
        name: "Corsair K70 RGB MK.2",
        slug: "corsair-k70-rgb-mk.2",
        description:
          "Teclado mecânico com switches Cherry MX Red e estrutura de alumínio.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061587/ProGear%20Store/a5ztxvf3yzflbstoxnin.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061587/ProGear%20Store/sftdncwaxxhb7oquxcws.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061587/ProGear%20Store/d7s7yrxit3otlc8wxgxy.png",
        ],
        basePrice: 799.9,
        discountPercentage: 0,
        categoryId: keyboardsCategory.id,
      },
      {
        name: "Logitech G915 TKL",
        slug: "logitech-g915-tkl",
        description:
          "Teclado wireless mecânico de baixo perfil com iluminação RGB.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062114/ProGear%20Store/tl9uvtnsh6igsrr68q2e.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062292/ProGear%20Store/vwltuxo2idio6hrlkyem.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062292/ProGear%20Store/fhxqhmt8o5otzurv2np2.png",
        ],
        basePrice: 1199.9,
        discountPercentage: 0,
        categoryId: keyboardsCategory.id,
      },
      {
        name: "HyperX Alloy Origins Core",
        slug: "hyperx-alloy-origins-core",
        description:
          "Teclado compacto com switches mecânicos HyperX e iluminação RGB dinâmica.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061588/ProGear%20Store/zipn94tteeee6wewx7c2.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061588/ProGear%20Store/iixistzgt9iihui3oleb.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061588/ProGear%20Store/c678z4jrmqx37gtlpohd.png",
        ],
        basePrice: 649.9,
        discountPercentage: 12,
        categoryId: keyboardsCategory.id,
      },
      {
        name: "SteelSeries Apex Pro",
        slug: "steelseries-apex-pro",
        description:
          "Teclado mecânico com switches ajustáveis e display OLED integrado.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062294/ProGear%20Store/qhplilpudq7st3sxnpe4.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062294/ProGear%20Store/np7s1xeelez12mlwkxnk.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062294/ProGear%20Store/s5y67a2lqpvyoxct5fkt.png",
        ],
        basePrice: 1099.9,
        discountPercentage: 0,
        categoryId: keyboardsCategory.id,
      },
      {
        name: "Redragon Kumara K552",
        slug: "redragon-kumara-k552",
        description:
          "Teclado mecânico compacto com iluminação RGB e switches Outemu Blue.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062293/ProGear%20Store/yrfussk7h1w1sj2caugi.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062293/ProGear%20Store/ssko1lr1rucqxk4tdjww.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062294/ProGear%20Store/kdnvdtp5hl01wjfjvwdd.png",
        ],
        basePrice: 249.9,
        discountPercentage: 0,
        categoryId: keyboardsCategory.id,
      },
      {
        name: "Cooler Master CK552",
        slug: "cooler-master-ck552",
        description: "Teclado mecânico com switches Gateron e iluminação RGB.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061587/ProGear%20Store/v4c3swzm6zacgyjtcihb.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061586/ProGear%20Store/xwhgejxxgvu3ugli93ld.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061587/ProGear%20Store/wglevs08rz8cenqk9cvk.png",
        ],
        basePrice: 379.9,
        discountPercentage: 0,
        categoryId: keyboardsCategory.id,
      },
      {
        name: "Logitech G413",
        slug: "logitech-g413",
        description:
          "Teclado mecânico com switches Romer-G e estrutura de alumínio.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061588/ProGear%20Store/qr7lddazgddwxxinvzuy.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061592/ProGear%20Store/nuyi9g4aihao6dlnfr2r.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061623/ProGear%20Store/ashlwraynjuf60fd9wzs.png",
        ],
        basePrice: 429.9,
        discountPercentage: 8,
        categoryId: keyboardsCategory.id,
      },
      {
        name: "Razer BlackWidow V3",
        slug: "razer-blackwidow-v3",
        description:
          "Teclado mecânico com switches Razer Green e iluminação RGB.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062292/ProGear%20Store/lkla0chubvf0ygxgnpj0.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062293/ProGear%20Store/zurkebuv1z7wcnjwe6p4.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737062293/ProGear%20Store/bv5dklh2ogobnooawgzl.png",
        ],
        basePrice: 749.9,
        discountPercentage: 0,
        categoryId: keyboardsCategory.id,
      },
      {
        name: "HyperX Alloy FPS Pro",
        slug: "hyperx-alloy-fps-pro",
        description: "Teclado compacto sem teclado numérico, ideal para FPS.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061587/ProGear%20Store/fnjdcfzmxtb2zrripvdq.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061588/ProGear%20Store/ni6ycfxtdbzlnyl3b2v7.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737061588/ProGear%20Store/c8gwradsb528ld2vnm6q.png",
        ],
        basePrice: 499.9,
        discountPercentage: 0,
        categoryId: keyboardsCategory.id,
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Headphones",
        slug: "headphones",
      },
    });

    const headphones = [
      {
        name: "HyperX Cloud II",
        slug: "hyperx-cloud-II",
        description:
          "Headset com som surround 7.1, conforto premium e microfone removível.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073021/ProGear%20Store/a2qe84iajwvxwizwvdd9.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073021/ProGear%20Store/n6mhjjfjqoz6hd2emx6n.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073021/ProGear%20Store/bgdc1cbyhixrzdljn9bd.png",
        ],
        basePrice: 499.9,
        discountPercentage: 0,
        categoryId: headphonesCategory.id,
      },
      {
        name: "Razer BlackShark V2",
        slug: "razer-blackshark-v2",
        description:
          "Headset leve com drivers de 50 mm, som THX Spatial e microfone destacável.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073022/ProGear%20Store/lpr7kmytu2plait8flnq.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073022/ProGear%20Store/gm31y7bf51dzdnoqujkx.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073022/ProGear%20Store/h2uueftwj1dbut4fkirw.png",
        ],
        basePrice: 629.9,
        discountPercentage: 10,
        categoryId: headphonesCategory.id,
      },
      {
        name: "Logitech G733 Lightspeed",
        slug: "logitech-g733-lightspeed",
        description:
          "Headset sem fio com som surround, iluminação RGB e microfone ajustável.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073022/ProGear%20Store/cq5kvan6sojap9lphrll.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073022/ProGear%20Store/lssguz3yfnjjbi1ym23d.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073022/ProGear%20Store/fren3jyes4g77ozl25ga.png",
        ],
        basePrice: 899.9,
        discountPercentage: 0,
        categoryId: headphonesCategory.id,
      },
      {
        name: "SteelSeries Arctis 7+",
        slug: "steelseries-arctis-7+",
        description:
          "Headset wireless com som Hi-Res, bateria de até 30 horas e microfone ClearCast.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073023/ProGear%20Store/fxfhpzoa4pmeqf4hwanf.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073024/ProGear%20Store/z1u6xql9gtavf9qg9om9.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073024/ProGear%20Store/obg46sxwncviimc0qd1w.png",
        ],
        basePrice: 1099.9,
        discountPercentage: 0,
        categoryId: headphonesCategory.id,
      },
      {
        name: "Corsair HS70 Pro Wireless",
        slug: "corsair-hs70-pro-wireless",
        description:
          "Headset sem fio com drivers de neodímio de 50 mm e som surround 7.1.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073020/ProGear%20Store/cvezp2eesfij7cqeomdb.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073020/ProGear%20Store/jvly5ejln6hmjzrylnq8.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073020/ProGear%20Store/egtbw92tu4ihnkwxtqyq.png",
        ],
        basePrice: 649.9,
        discountPercentage: 0,
        categoryId: headphonesCategory.id,
      },
      {
        name: "Redragon Zeus X H510",
        slug: "redragon-zeus-x-h510",
        description:
          "Headset com som estéreo, design confortável e microfone destacável.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073023/ProGear%20Store/dulqrdpuveweucith2u0.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073023/ProGear%20Store/rmg1jhoxensdihk2sjzq.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073023/ProGear%20Store/hdohqit3mdbsrk1rezum.png",
        ],
        basePrice: 289.9,
        discountPercentage: 0,
        categoryId: headphonesCategory.id,
      },
      {
        name: "HyperX Cloud Alpha",
        slug: "hyperx-cloud-alpha",
        description:
          "Headset com drivers de câmara dupla para som imersivo e estrutura de alumínio.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073020/ProGear%20Store/obd5n8nywuop2ifcj0h8.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073021/ProGear%20Store/rq0ukgmtaafsjgz28fm3.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073021/ProGear%20Store/qlky3ftbjpwvcv09zkd0.png",
        ],
        basePrice: 599.9,
        discountPercentage: 0,
        categoryId: headphonesCategory.id,
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "Headset leve com som surround 7.1 e almofadas de espuma de memória.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073022/ProGear%20Store/ufkuolj1j89skndozzvu.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073022/ProGear%20Store/vm9cjmon0ovzcxyj7wnu.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073023/ProGear%20Store/u3ydovrmszvlkvqi3rmm.png",
        ],
        basePrice: 299.9,
        discountPercentage: 0,
        categoryId: headphonesCategory.id,
      },
      {
        name: "Logitech G Pro X",
        slug: "logitech-G-pro-x",
        description:
          "Headset projetado para esports com som surround 7.1 e microfone Blue VO!CE.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073022/ProGear%20Store/di3tloqfrufacxct1ls5.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073020/ProGear%20Store/d1qamltokjvi2inolqmc.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073020/ProGear%20Store/itygogighdr6h6ljqccj.png",
        ],
        basePrice: 749.9,
        discountPercentage: 0,
        categoryId: headphonesCategory.id,
      },
      {
        name: "SteelSeries Arctis 3",
        slug: "steelseries-arctis-3",
        description:
          "Headset multiplataforma com drivers de som nítidos e microfone retrátil.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073023/ProGear%20Store/hrylgs4hhcz4w8d0dg8p.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073023/ProGear%20Store/mykmkykbgtzcvti1ognl.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737073023/ProGear%20Store/nwiwgk6v3svkdhuggssw.png",
        ],
        basePrice: 449.9,
        discountPercentage: 0,
        categoryId: headphonesCategory.id,
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
      },
    });

    const mousepads = [
      {
        name: "Razer Goliathus Speed",
        slug: "razer-goliathus-speed",
        description:
          "Mousepad com superfície de tecido para movimentos rápidos e precisos.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148719/ProGear%20Store/jwf7n8tqpymknnt31jj1.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148719/ProGear%20Store/cxna4ndruztinggjrull.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148719/ProGear%20Store/n42kf1dptei3luxu7l8v.png",
        ],
        basePrice: 129.9,
        discountPercentage: 0,
        categoryId: mousepadsCategory.id,
      },
      {
        name: "HyperX Fury S Pro",
        slug: "hyperx-fury-s-pro",
        description:
          "Mousepad de tecido com bordas costuradas e base emborrachada.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148718/ProGear%20Store/ynxbhqxntrbxlgp8ulxk.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148718/ProGear%20Store/pbbb3oaqnzx8gtpnd3hw.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148718/ProGear%20Store/ro1l1zikflcfrmvbcmsz.png",
        ],
        basePrice: 89.9,
        discountPercentage: 0,
        categoryId: mousepadsCategory.id,
      },
      {
        name: "Corsair MM300 Extended",
        slug: "corsair-mm300-extended",
        description:
          "Mousepad grande com textura microtexturizada para precisão.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148718/ProGear%20Store/ybcwn0xwuj8z4xb8ul7v.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148718/ProGear%20Store/dxmnh1zhvyoudozqqgcd.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148717/ProGear%20Store/f7mjzu4vrwti4swmstom.png",
        ],
        basePrice: 199.9,
        discountPercentage: 10,
        categoryId: mousepadsCategory.id,
      },
      {
        name: "Logitech G240",
        slug: "logitech-g240",
        description:
          "Mousepad de tecido ideal para baixa sensibilidade no mouse.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148719/ProGear%20Store/ojiblklctm7nskdamoe0.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148719/ProGear%20Store/tuoms8pmhjaqr7qwwdug.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148719/ProGear%20Store/c6778t2lu5dklrfyas31.png",
        ],
        basePrice: 109.9,
        discountPercentage: 0,
        categoryId: mousepadsCategory.id,
      },
      {
        name: "SteelSeries QcK Heavy",
        slug: "steelseries-qck-heavy",
        description:
          "Mousepad espesso com base antiderrapante e superfície macia.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148720/ProGear%20Store/tuhzcvfsrnch0tqtkwnr.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148720/ProGear%20Store/zfnepbgnf3m8f2zqobhz.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148721/ProGear%20Store/dnfelmiczemij6tu6pzq.png",
        ],
        basePrice: 139.9,
        discountPercentage: 5,
        categoryId: mousepadsCategory.id,
      },
      {
        name: "Redragon Flick XL",
        slug: "redragon-flick-xl",
        description:
          "Mousepad de grande dimensão com base de borracha antiderrapante.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148720/ProGear%20Store/il55598jhu5hn8ylsinx.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148720/ProGear%20Store/tcz4jfoklthraenf0cyd.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148720/ProGear%20Store/pketcqn4ws0ktzxmmfy0.png",
        ],
        basePrice: 89.9,
        discountPercentage: 0,
        categoryId: mousepadsCategory.id,
      },
      {
        name: "Cooler Master MP510",
        slug: "cooler-master-mp510",
        description:
          "Mousepad com tecido Cordura resistente a água e desgaste.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148717/ProGear%20Store/fjnf5twexqsxhdpngtdn.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148717/ProGear%20Store/iab9zxayka79h98poawg.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148718/ProGear%20Store/gzsab74tkwfpznbdi0b4.png",
        ],
        basePrice: 149.9,
        discountPercentage: 0,
        categoryId: mousepadsCategory.id,
      },
      {
        name: "Logitech G840 XL",
        slug: "logitech-g840-xl",
        description:
          "Mousepad extragrande para setups completos de teclado e mouse.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148719/ProGear%20Store/ojiblklctm7nskdamoe0.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148719/ProGear%20Store/gxer5h1lrkqoehxizxzg.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148719/ProGear%20Store/mlxkhmnng60l6ueuizjy.png",
        ],
        basePrice: 299.9,
        discountPercentage: 0,
        categoryId: mousepadsCategory.id,
      },
      {
        name: "HyperX Pulsefire Mat",
        slug: "hyperx-pulsefire-mat",
        description:
          "Mousepad com tecido ultrafino e superfície otimizada para precisão.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148717/ProGear%20Store/ruo4iyai0ngrfyoswnux.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148717/ProGear%20Store/kvilfpchkslurtfzqjoy.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148718/ProGear%20Store/gt2bmivtq8ixfqedckfh.png",
        ],
        basePrice: 119.9,
        discountPercentage: 0,
        categoryId: mousepadsCategory.id,
      },
      {
        name: "Razer Strider Hybrid",
        slug: "razer-strider-hybrid",
        description:
          "Mousepad híbrido com superfície rígida e base antiderrapante.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148720/ProGear%20Store/fuxxtv5pnf71csxbhh1s.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148720/ProGear%20Store/ngznoekspo2narozdc1k.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737148720/ProGear%20Store/rdai0xkavb1hue2dmklu.png",
        ],
        basePrice: 199.9,
        discountPercentage: 0,
        categoryId: mousepadsCategory.id,
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
      },
    });

    const monitors = [
      {
        name: "Dell UltraSharp U2723QE",
        slug: "dell-ultrasharp-u2723qe",
        description: `Monitor 27" 4K com painel IPS, HDR400 e calibração de cores profissional.`,
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085306/ProGear%20Store/nfxul8rkcezwidurrbgf.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085307/ProGear%20Store/fs3nefwxxthrt2wolrbu.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085307/ProGear%20Store/zqeqhmu5xfgjren5zefd.png",
        ],
        basePrice: 3899.9,
        discountPercentage: 0,
        categoryId: monitorsCategory.id,
      },
      {
        name: "LG UltraGear 27GL850-B",
        slug: "lg-ultragear-27gk850-b",
        description: `Monitor 27" QHD com taxa de atualização de 144Hz e 1ms de tempo de resposta.`,
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085307/ProGear%20Store/fw0dhk70djzlw9epftm0.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085307/ProGear%20Store/fhzkw1scod3v0fqqq6tf.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085307/ProGear%20Store/cwceedvdaj5qgu96ldtk.png",
        ],
        basePrice: 2199.9,
        discountPercentage: 15,
        categoryId: monitorsCategory.id,
      },
      {
        name: "Samsung Odyssey G7",
        slug: "samsung-odyssey-g7",
        description: `Monitor curvo 32" QHD, 240Hz, e suporte para G-Sync e FreeSync.`,
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085308/ProGear%20Store/pddcyde688e9zntry2nb.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085308/ProGear%20Store/mlqdlcbwwjg8nxg6jhti.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085308/ProGear%20Store/nqxyxdctnjyt2ww08wk8.png",
        ],
        basePrice: 3499.9,
        discountPercentage: 0,
        categoryId: monitorsCategory.id,
      },
      {
        name: "ASUS TUF Gaming VG27AQ",
        slug: "asus-tuf-gaming-vG27aq",
        description: `Monitor 27" QHD com 165Hz, HDR10 e tecnologia ASUS Extreme Low Motion Blur.`,
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085306/ProGear%20Store/qrmv1smmmypaj79zupf8.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085306/ProGear%20Store/f5lg92rfzeftm5qugh4z.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085307/ProGear%20Store/jvpmtlgsn59izd0jz6g4.png",
        ],
        basePrice: 2499.9,
        discountPercentage: 10,
        categoryId: monitorsCategory.id,
      },
      {
        name: "AOC Hero 24G2",
        slug: "aoc-hero-24g2",
        description: `Monitor 24" Full HD com 144Hz, 1ms e design de borda ultrafina.`,
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085305/ProGear%20Store/llsxj2ffclqi95hpi7x6.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085306/ProGear%20Store/v0ud1krj2bakqsh4qiby.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085306/ProGear%20Store/f1mcvi61nvba3hflruwu.png",
        ],
        basePrice: 1199.9,
        discountPercentage: 0,
        categoryId: monitorsCategory.id,
      },
      {
        name: "MSI Optix MAG274QRF",
        slug: "msi-optix-mag274qrf",
        description: `Monitor 27" QHD com 165Hz, painel IPS e suporte HDR.`,
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085307/ProGear%20Store/vmze4grnw9zpmbnnkl4w.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085307/ProGear%20Store/lvm62dkoc9elu9bgt7ok.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085308/ProGear%20Store/dg3tutlcddjmto6gvor2.png",
        ],
        basePrice: 2299.9,
        discountPercentage: 0,
        categoryId: monitorsCategory.id,
      },
      {
        name: "BenQ EX3501R",
        slug: "benq-ex3501r",
        description: `Monitor ultrawide curvo 35" com HDR10 e resolução QHD+ (3440x1440).`,
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085306/ProGear%20Store/fs5lnt9ow0sswxc7y6fb.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085305/ProGear%20Store/gblykrzqllakogidwhh0.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085305/ProGear%20Store/deob6betdsplyf212hmq.png",
        ],
        basePrice: 4499.9,
        discountPercentage: 0,
        categoryId: monitorsCategory.id,
      },
      {
        name: "Gigabyte M28U",
        slug: "gigabyte-m28u",
        description: `Monitor 28" 4K com 144Hz, HDMI 2.1 e tempo de resposta de 1ms.`,
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085307/ProGear%20Store/tecrxkhzu5n5yck6ud5t.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085307/ProGear%20Store/bx1ta6kscfofuhlofjmv.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085307/ProGear%20Store/wwwxmxgd3vbn9cbiz7ix.png",
        ],
        basePrice: 3799.9,
        discountPercentage: 0,
        categoryId: monitorsCategory.id,
      },
      {
        name: "Philips 242E1GSJ",
        slug: "philips-242e1gsj",
        description: `Monitor 24" Full HD com 165Hz e tecnologia Adaptive Sync.`,
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085308/ProGear%20Store/dzgfdhergni3gwpztqtf.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085308/ProGear%20Store/a6s9wpsqqydvtgxslly8.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085308/ProGear%20Store/wchazldjqb5vma3x3gtc.png",
        ],
        basePrice: 1099.9,
        discountPercentage: 0,
        categoryId: monitorsCategory.id,
      },
      {
        name: "Alienware AW2523HF",
        slug: "alienware-aw2523hf",
        description: `Monitor 24.5" Full HD com 360Hz, 1ms e certificação G-Sync.`,
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085305/ProGear%20Store/ox1mv0ujbulwbpw4j1nl.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085305/ProGear%20Store/kf468isvhzkflcx07dmr.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737085305/ProGear%20Store/d1vde7hod8pflh2ptkh9.png",
        ],
        basePrice: 2999.9,
        discountPercentage: 0,
        categoryId: monitorsCategory.id,
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const accessoriesCategory = await prisma.category.create({
      data: {
        name: "Acessórios Gamer",
        slug: "accessories",
      },
    });

    const accessories = [
      {
        name: "Elgato Stream Deck MK.2",
        slug: "elgato-stream-deck-mk.2",
        description:
          "Controlador para streaming com 15 teclas personalizáveis.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171655/ProGear%20Store/itdny2skcorzlpestic1.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171655/ProGear%20Store/kpaits6dhsxowotin1sv.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171655/ProGear%20Store/ontirunq4mwlcod8nfab.png",
        ],
        basePrice: 1199.9,
        discountPercentage: 0,
        categoryId: accessoriesCategory.id,
      },
      {
        name: "Razer Seiren X",
        slug: "razer-seiren-x",
        description:
          "Microfone condensador compacto com qualidade de estúdio e cancelamento de ruído.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171656/ProGear%20Store/e3vw45957ff6zfstnvj2.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171657/ProGear%20Store/vyks97jxohlncm3iaopo.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171657/ProGear%20Store/zpoldlvkyf1jnxjunuhv.png",
        ],
        basePrice: 599.9,
        discountPercentage: 0,
        categoryId: accessoriesCategory.id,
      },
      {
        name: "HyperX ChargePlay Clutch",
        slug: "hyperx-chargeplay-clutch",
        description:
          "Base de carregamento sem fio para controles de console e smartphones.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171654/ProGear%20Store/x8qnkrhf9m8ajzlco4zz.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171654/ProGear%20Store/tsmflo0znuiikmwv4ulm.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171655/ProGear%20Store/qdwirlbbyjh7cht77irq.png",
        ],
        basePrice: 249.9,
        discountPercentage: 0,
        categoryId: accessoriesCategory.id,
      },
      {
        name: "Logitech C920 Pro",
        slug: "logitech-c920-pro",
        description: "Webcam Full HD com lente de vidro e foco automático.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171656/ProGear%20Store/tsczblg3owrkn4bw7fl4.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171656/ProGear%20Store/n7jjmwuj3fmqpw3yigij.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171656/ProGear%20Store/xfqj5orqnxmobmpowgov.png",
        ],
        basePrice: 499.9,
        discountPercentage: 0,
        categoryId: accessoriesCategory.id,
      },
      {
        name: "Corsair Virtuoso RGB Stand",
        slug: "corsair-virtuoso-rgb-stand",
        description:
          "Suporte para headsets com iluminação RGB e duas portas USB 3.1.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171655/ProGear%20Store/grltqsjzrrvmvdqro5ce.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171654/ProGear%20Store/mttfvfr4yz36dn5j8dnp.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171655/ProGear%20Store/rydm7rs5uvmhp2k1dizy.png",
        ],
        basePrice: 399.9,
        discountPercentage: 0,
        categoryId: accessoriesCategory.id,
      },
      {
        name: "SteelSeries PrismCaps",
        slug: "steelseries-prismcaps",
        description:
          "Conjunto de keycaps com iluminação aprimorada e alta durabilidade.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171657/ProGear%20Store/yoatxyo4ofgkps3jl5eq.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171657/ProGear%20Store/rhlsccwcbylz4awkcgc9.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171657/ProGear%20Store/b4uzegqaejzk912l7ygk.png",
        ],
        basePrice: 249.9,
        discountPercentage: 0,
        categoryId: accessoriesCategory.id,
      },
      {
        name: "Razer Viper Mouse Dock Chroma",
        slug: "razer-viper-mouse-dock-chroma",
        description:
          "Base de carregamento para mouses wireless com iluminação RGB.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171657/ProGear%20Store/bmgtmwiiozmyjoopnm4y.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171657/ProGear%20Store/vvts0tuyxpf1qgg62o5n.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171657/ProGear%20Store/kru6o4f1irjojhi8msbf.png",
        ],
        basePrice: 299.9,
        discountPercentage: 0,
        categoryId: accessoriesCategory.id,
      },
      {
        name: "Logitech G PowerPlay",
        slug: "logitech-g-powerplay",
        description:
          "Mousepad com carregamento sem fio para mouses compatíveis.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171656/ProGear%20Store/bqfdu2a0orjynirrme7e.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171656/ProGear%20Store/vlnwarvtmp7pqrlbkqbi.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171656/ProGear%20Store/e9pwu3d6lxrygztzm31r.png",
        ],
        basePrice: 749.9,
        discountPercentage: 0,
        categoryId: accessoriesCategory.id,
      },
      {
        name: "HyperX Wrist Rest",
        slug: "hyperx-wrist-rest",
        description:
          "Apoio de pulso em espuma de memória para teclados mecânicos.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171655/ProGear%20Store/ndiamcyb7xey3tca9rgr.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171655/ProGear%20Store/v3yj0tsf9wd5f5hhweyp.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171656/ProGear%20Store/aqx7sdvewbnyqq1vnmqq.png",
        ],
        basePrice: 99.9,
        discountPercentage: 0,
        categoryId: accessoriesCategory.id,
      },
      {
        name: "Cooler Master MasterAccessory",
        slug: "cooler-master-masteraccessory",
        description:
          "Kit de acessórios para customização de teclados e mouses.",
        imageUrls: [
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171654/ProGear%20Store/m6aek423gxioyasfdkkf.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171654/ProGear%20Store/e2ycq8cbpgqbvxeb8zey.png",
          "https://res.cloudinary.com/drnufopzw/image/upload/v1737171654/ProGear%20Store/vvtpcavts4jmovxxvq03.png",
        ],
        basePrice: 129.9,
        discountPercentage: 0,
        categoryId: accessoriesCategory.id,
      },
    ];

    await prisma.product.createMany({
      data: accessories,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
