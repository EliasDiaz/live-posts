import { EventEmitter, Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfPosts: Post[] = [
    // new Post(
    //   'Nature',
    //   'Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.',
    //   'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg',
    //   'test@test.com',
    //   new Date(),
    //   5
    // ),
    // new Post(
    //   'Hampi',
    //   'Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.',
    //   'https://www.deccanherald.com/sites/dh/files/article_images/2019/03/15/Hampi-DH-1552611002.jpg',
    //   'test@test.com',
    //   new Date(),
    //   4
    // ),
    // new Post(
    //   'Araku Valley',
    //   `Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. It's surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the area's numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts.`,
    //   'https://vizagtourism.org.in/images/places-to-visit/header/araku-valley-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg',
    //   'test@test.com',
    //   new Date(),
    //   3
    // ),
    // new Post(
    //   'Cricket',
    //   'Awesome match 2',
    //   'https://d1e00ek4ebabms.cloudfront.net/production/a646c9b7-13a5-4420-ab42-13ac0cf8a158.jpg',
    //   'test@test.com',
    //   new Date(),
    //   2
    // ),
    // new Post(
    //   'IPL T20',
    //   'The Indian Premier League is a professional Twenty20 cricket league, contested by eight teams based out of eight different Indian cities. The league was founded by the Board of Control for Cricket in India in 2007. Wikipedia',
    //   'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/08/07/917968-ipl.jpg',
    //   'test@test.com',
    //   new Date(),
    //   1
    // ),
  ];

  /**
   *  Facility 1
   * @returns listOfPosts
   */
  getListOfPosts() {
    return this.listOfPosts;
  }

  /**
   * Facility 2
   * @param index
   */
  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }

  /**
   * Facility 3
   * @param post
   */
  addPost(post: Post) {
    this.listOfPosts.push(post);
  }

  /**
   * Facility 4
   * @param index
   * @param post
   */
  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }

  /**
   * Facility 5
   * @param index
   * @returns his.listOfPosts[index]
   */
  getPost(index: number) {
    return this.listOfPosts[index];
  }

  /**
   * Facility 6
   * @param index 
   */
  likePost(index: number){
    this.getListOfPosts()[index].numberOfLikes += 1;
  }


  /**
   * Facility 7
   * @param listOfPosts 
   */
  setPosts(listOfPosts: Post[]){
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(this.listOfPosts);
  }

}
