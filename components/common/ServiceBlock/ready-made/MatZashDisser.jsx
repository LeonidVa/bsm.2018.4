import ServiceBlock from 'components/common/ServiceBlock'
import servicecards from "data/serviceCards";


export default () => (
      <ServiceBlock
        image={require('static/images/block/mat-dlya-zash.jpg')}
        title="Материалы для успешной защиты"
        text={<div>
          <p>Эффектная презентация</p>
          <p>Быстро и качественно</p>
          <p>С нами твоя защита пройдет легко!</p>
        </div>}
        cards={[
          [
            servicecards["Монография"],
            servicecards["Автореферат"],
            servicecards["Оригинальность"],
            servicecards["По главам"],
          ],
          [
            servicecards["Ответы к защите"],
            servicecards["Доклад Слайды"],
            servicecards["Аннотация Отзыв Рецензия"],
            servicecards["Плакаты к защите"],
            servicecards["Распечатка Переплеты"],
          ],
        ]}
      />
);