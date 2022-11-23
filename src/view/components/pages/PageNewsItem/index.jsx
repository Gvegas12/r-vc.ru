import React from "react";
import axios from "axios";
import CardSocialActions from "../../templates/CardSocialActions";

import styles from "./index.module.scss";

const PageNewsItem = () => {
  const [fetchingData, setFetchingData] = React.useState({});

  React.useEffect(() => {
    try {
      axios
        .get(
          `http://localhost:7000/news/${localStorage.getItem(
            "selectedNewsItemIndex"
          )}`
        )
        .then((res) => setFetchingData(res.data?.articles));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperTop + " pt-10 pb-10"}>
          <div className={`d-flex ${styles.cardSocialInfo}`}>
            <div>
              img{" "}
              <span>Бизнес</span>
            </div>
            {fetchingData?.author && <div>{fetchingData.author}</div>}
            <div className={styles.createdAt}>вчера в 18:43</div>
          </div>
          <div className={styles.titleWrapper + " mb-10"}>
            <h1>{fetchingData?.title}</h1>
            <p>{fetchingData?.description}</p>
          </div>
          {fetchingData?.urlToImage && (
            <img className="mb-10" src={fetchingData.urlToImage} width="100%" />
          )}
          <CardSocialActions className={styles.cardSocialInfo} />
        </div>
        <div className={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          labore debitis vitae nihil eum ab, ratione error voluptatibus nisi
          pariatur voluptas ullam ex officiis iure ducimus nesciunt
          necessitatibus corrupti maiores! Ratione perferendis adipisci, quas
          consequatur facilis velit omnis? Non harum fugit repudiandae quia
          facilis eligendi nostrum ducimus? Repellat cumque, vel ducimus minima
          eius doloremque, harum quas saepe porro in enim eum non, aperiam
          dignissimos iste! Veniam inventore amet porro accusamus maiores et qui
          omnis laborum! Enim ratione dolores cum! Consequuntur cum odio
          explicabo ut quo quisquam, ipsum ea fugit. Hic quidem ut dolore est
          assumenda sapiente eum mollitia nobis? Repudiandae enim doloremque
          explicabo sapiente quam quod beatae ad placeat ullam, quis suscipit
          iure voluptatum totam iusto, id natus excepturi veniam culpa? Debitis
          aut, velit eligendi voluptates accusantium, porro aspernatur molestiae
          perspiciatis necessitatibus repudiandae ex nam iure ratione autem
          laborum, hic suscipit ea est placeat! Omnis, tempora? Voluptas, vitae
          magni sapiente dignissimos dolore commodi nobis aliquam, harum tempora
          ab atque tempore vero natus! Officia accusantium eos id voluptatibus
          veniam repudiandae dolore autem vel placeat corporis, inventore iusto
          reiciendis dignissimos alias animi, dolorem aut exercitationem
          obcaecati impedit tenetur eligendi. Molestias deleniti repellat ipsam
          nisi perspiciatis, consequatur dolorum dolor quod, sit commodi aut at
          possimus! Reiciendis beatae laudantium debitis ipsam libero incidunt,
          tempora ipsa ratione quasi nam laborum natus vel animi, expedita
          autem. Asperiores aspernatur architecto soluta in qui iure! Soluta
          ipsam dicta ipsum dolorem. Incidunt ab consequuntur laudantium
          praesentium. Est id ducimus voluptatum numquam dicta voluptate
          possimus delectus quos dolores iste. Architecto, soluta eligendi aut
          at repellendus nesciunt amet modi rem aperiam, totam adipisci suscipit
          aspernatur optio magnam. Voluptate, eaque? Beatae earum consequatur
          laborum nostrum distinctio perferendis in, ex placeat perspiciatis
          laboriosam, at quia impedit doloribus modi sint culpa quos numquam
          maxime, natus expedita enim adipisci omnis cum. Necessitatibus esse
          aliquid consequatur eius officia! Numquam beatae illum sequi sint
          deserunt magni. Atque sunt cum mollitia consequuntur excepturi
          similique aliquam officia eum illum, hic amet sed minus fuga
          accusantium perspiciatis quasi natus quas! Dicta officia laborum quia
          repudiandae ipsum nobis doloremque harum voluptatum, sed accusamus. A
          ratione veniam ullam aperiam dicta vitae itaque similique voluptatibus
          nam assumenda, porro iusto commodi earum inventore tempore deserunt
          recusandae magnam et esse, non praesentium sapiente quae doloribus.
          Provident incidunt soluta temporibus impedit deserunt a veritatis non
          distinctio voluptate nesciunt quam maiores asperiores earum reiciendis
          labore libero dolores natus cum recusandae suscipit, ipsam explicabo
          perspiciatis. Optio quasi impedit esse corrupti, error corporis et
          exercitationem soluta suscipit numquam rem, ea illum quis culpa
          aliquid nesciunt minima. Eaque aperiam quasi accusamus praesentium ad
          sapiente ea nobis optio labore, hic, iusto ipsa reprehenderit eius
          tempora nisi? Accusamus eligendi eos, harum doloribus iure nulla
          ducimus consequuntur exercitationem adipisci. Quisquam ex quia
          distinctio accusamus nihil dolor, praesentium ad itaque cumque facilis
          molestiae repellat excepturi iste eligendi, omnis qui impedit alias
          nulla ut placeat illum? Inventore perferendis, nobis sunt quidem
          laudantium quas error modi nisi minus maiores autem cumque quod harum,
          omnis excepturi et nihil aspernatur ea mollitia odit vitae, commodi
          iusto porro quibusdam?
        </div>
      </div>
    </div>
  );
};

export default PageNewsItem;
