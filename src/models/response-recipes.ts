export interface ResponseRecipes {
    count:   number;
    results: Recipe[];
}

export interface RecipeListed {
    id : number;
    image: String;
    imageType: String;
    title: String;
}

export interface Recipe {
    approved_at:              number;
    aspect_ratio:             string;
    beauty_url:               null | string;
    brand_id:                 number | null;
    brand:                    string | null;
    buzz_id:                  null;
    canonical_id:             string;
    compilations:             string;
    cook_time_minutes:        number | null;
    country:                  string;
    created_at:               number;
    credits:                  string;
    description:              string;
    draft_status:             string;
    facebook_posts:           any[];
    id:                       number;
    inspired_by_url:          null;
    instructions:             Steps[];
    is_one_top:               boolean;
    is_shoppable:             boolean;
    keywords:                 string;
    language:                 string;
    name:                     string;
    num_servings:             number;
    nutrition_visibility:     string;
    nutrition:                string;
    original_video_url:       null | string;
    prep_time_minutes:        number | null;
    promotion:                string;
    renditions:               string;
    sections:                 string;
    seo_title:                string;
    servings_noun_plural:     string;
    servings_noun_singular:   string;
    show_id:                  number;
    show:                     string;
    slug:                     string;
    tags:                     string;
    thumbnail_alt_text:       string;
    thumbnail_url:            string;
    tips_and_ratings_enabled: boolean;
    topics:                   string;
    total_time_minutes:       number | null;
    total_time_tier:          string;
    updated_at:               number;
    user_ratings:             Rating;
    video_ad_content:         null | string;
    video_id:                 number | null;
    video_url:                null | string;
    yields:                   string;
}

export interface Rating {
    count_negative:           null|number;
    count_positive:           null|number;
    score:                    null|number;
}

export interface Steps{
    display_text:             string;
    end_time:                 number; 
    id:                       number;
    position:                 number;
    start_time:               number;
    temperature:              null|number;
}