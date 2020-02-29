import scrapingData from '../../utils/scrapingData';

class CrawlerController {
  async store(req, res) {
    try {
      const { checkin, checkout } = req.body;

      const data = await scrapingData(checkin, checkout);

      return res.json(data);
    } catch (err) {
      return res.status(400).json({
        error:
          'Desculpe-nos. Não existem apartamentos disponíveis para a pesquisa realizada.',
      });
    }
  }
}

export default new CrawlerController();
