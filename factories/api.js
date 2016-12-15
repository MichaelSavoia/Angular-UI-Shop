(function() {


    angular
        .module('shop')
        .factory("itemData", function() {

            let items = [
                { 'id': '1', 'company': 'A.P.C.', 'name': 'Petit New Standard', 'type': 'jeans', 'description': "The original 5-pocket jean, with a slight reworking from the Parisian label, A.P.C. Cut slightly narrower silhouette than the ever-popular New Standard, the Petit New Standard are constructed from 100% Japanese Denim, washed in a dark indigo dye. These jeans feature an engraved 'A.P.C. Paris rue Madame près du Luxembourg' detail on the top button and have a regular, mid rise silhouette." },
                { 'id': '2', 'company': 'Nudie Jeans', 'name': 'Lean Dean', 'type': 'jeans', 'description': "Nudie continue to produce top quality denim with an eye to maintaining sustainability. Applying this philosophy to the Lean Dean, the dry 16 dips wash is cut from a stiffer organic cotton with no rinse to allow them to release their full stretch ability. Staying true to the styles silhouette, the Lean Dean is slim from top to bottom and narrows at the leg opening to create a carrot fit, finished with copper trims and orange threads throughout." },
                { 'id': '3', 'company': 'Acne Studios', 'name': 'Ace Stay Cash', 'type': 'jeans', 'description': "The Acne Ace Stay Cash Jean is a slim cut jean with a slim leg, regular waist and taper from the knee. Made from a cotton blend black denim, the Ace features classic Acne detailing such as flat rivets on the back pockets, narrow stitched seams, three needle stitching on inner leg and classic pocket set up." },
                { 'id': '4', 'company': 'A.P.C.', 'name': 'APC Oxford Button Down', 'type': 'shirt', 'description': "Since 1987 A.P.C. have been imbuing their collections with an effortless sense of Parisian cool. Clean silhouettes teamed with premium updates of wardrobe staples has seen the label go from strength to strength. Here the French label crafts an immaculate iteration of a classic button down shirt from the finest Oxford cloth. Traditionally styled, the shirt is completed with a button-down collar and button closure cuffs." },
                { 'id': '5', 'company': 'Acne Studios', 'name': 'Isherwood Brushed Flannel Shirt', 'type': 'shirt', 'description': "The Isherwood has become a staple fixture in Acne Studios' offering, with its casual fit and easy styling making it an absolute staple. For AW16 the Isherwood is crafted from a cotton flannel with a brushed surface to add extra warmth for the year's colder days." },
                { 'id': '6', 'company': 'Engineered Garments', 'name': '19th Century Button Down Shirt', 'type': 'shirt', 'description': "Thinking about clothes quite differently, Engineered Garments do not design clothes – but engineer them with the wearer in mind. Japanese designer Daiki Suzuki showcases his long obsession with coveting classic American garments in this 19th century button down chambray shirt – finished with fine American craftsmanship." },
                { 'id': '7', 'company': 'A.P.C.', 'name': 'Lewis Coat', 'type': 'outerwear', 'description': "Since 1987 A.P.C. have been imbuing their collections with an effortless sense of Parisian cool; expect clean silhouettes and wardrobe staples. Keeping you sleek and stylish throughout the winter months, the Lewis jacket has been cut to a formal length with a tailored collar and smart three button closure. The Italian napped wool-cotton shell has been styled with piped flap pockets and a jacquard mini-houndstooth lining." },
                { 'id': '8', 'company': 'Our Legacy', 'name': 'Puffed Bomber', 'type': 'outerwear', 'description': "Aptly titled ‘Rehearsal’,Our Legacy present a solid selection of outerwear as part of their thematic AW16 collection. Placing themselves backstage with the actors, the Swedish label go behind-the-scenes to produce apparel associated with the cool yet comfortable clothing worn by the actors – as themselves and as their characters. Produced in an Italian resin coated fabric and insulated for extra warmth, the resin coated bomber has been insulated for extra warmth; falling in line with this seasons offering of style and function." },
                { 'id': '9', 'company': 'Visvim', 'name': 'Social Sculpture 101 Denim Jacket', 'type': 'outerwear', 'description': "A perfect example of how Hiroki Nakamura creates heritage inspired pieces that are packed full of contemporary details whilst remaining timeless. The Visvim Social Sculpture 101 Jacket is constructed from a rare, 13oz blue selvedge denim spun in Japan, a material which truly deserves to be called premium. Featuring original buttons and rivets, it is finished off with an indigo dyed elk leather patch at the hem." },
                { 'id': '10', 'company': 'Stone Island', 'name': 'Lambswool Crew Knit', 'type': 'sweater', 'description': "Lending their signature style to a lambswool-blend knit, Stone Island complete their iteration with a wide ribbing to the cuffs, hem and neckline, along with the now iconic compass patch to the sleeve." },
                { 'id': '11', 'company': 'S.N.S Herning', 'name': 'Fisherman Roll Neck', 'type': 'sweater', 'description': "S.N.S. Herning have a rich heritage in producing some of the finest knitwear around, basing their knowledge on close to a century of supplying Scandinavian fisherman with essential, warming knits. This multi-textured virgin wool knit features a roll neck, and is finished with ribbed collar, cuffs and hem. A perfect addition to the wardrobe for the upcoming cold seasons." },
                { 'id': '12', 'company': 'Rag & Bone', 'name': 'Oliver Crew Knit', 'type': 'sweater', 'description': "Epitomizing an effortless sense of New York cool, rag & bone's collection of finely honed essentials provides the contemporary wardrobe with everything it could ever need. Crafted from a soft aplaca blended yarn, the Oliver Crew features a textured surface with its only decoration arriving in the form of a ribbed crew neck, cuffs and hem. An unparalleled take on the classic crew knit." }
            ];

            const getData = function() {
                return items;
            };

            const getSingleItem = function(id) {
                let todo;
                items.forEach(function(item) {
                    if (item.id == id) {
                        todo = item;
                    }
                });
                return todo;
            };

            return {
                getData,
                getSingleItem,
            };


        });

})();
