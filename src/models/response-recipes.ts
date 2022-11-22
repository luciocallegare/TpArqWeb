export interface ResponseRecipes {
    count:   number;
    results: recipe[];
}
// export class ResponseRecipes {
//     count:   number;
//     results: recipe[];

//     constructor() {
        
//     }
// }

export interface recipe {
    is_one_top:               boolean;
    cook_time_minutes:        number | null;
    promotion:                string;
    keywords:                 string;
    show:                     string;
    servings_noun_plural:     string;
    canonical_id:             string;
    show_id:                  number;
    draft_status:             string;
    sections:                 string;
    tags:                     string;
    thumbnail_alt_text:       string;
    credits:                  string;
    topics:                   string;
    slug:                     string;
    servings_noun_singular:   string;
    video_url:                null | string;
    prep_time_minutes:        number | null;
    name:                     string;
    buzz_id:                  null;
    thumbnail_url:            string;
    is_shoppable:             boolean;
    video_id:                 number | null;
    compilations:             string;
    num_servings:             number;
    brand:                    string | null;
    nutrition:                string;
    tips_and_ratings_enabled: boolean;
    video_ad_content:         null | string;
    seo_title:                string;
    country:                  string;
    instructions:             string;
    language:                 string;
    brand_id:                 number | null;
    aspect_ratio:             string;
    description:              string;
    inspired_by_url:          null;
    total_time_minutes:       number | null;
    nutrition_visibility:     string;
    facebook_posts:           any[];
    beauty_url:               null | string;
    total_time_tier:          string;
    yields:                   string;
    original_video_url:       null | string;
    updated_at:               number;
    renditions:               string;
    created_at:               number;
    approved_at:              number;
    user_ratings:             string;
    id:                       number;
}