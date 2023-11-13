/* eslint-disable */

interface InstagramProfileData {
    seo_category_infos: [string, string][];
    logging_page_id: string;
    show_suggested_profiles: boolean;
    graphql: {
        user: {
            biography: string;
            bio_links: any[]; // Define actual type if possible
            fb_profile_biolink: string | null;
            biography_with_entities: {
                raw_text: string;
                entities: any[]; // Define actual type if possible
            };
            blocked_by_viewer: boolean;
            restricted_by_viewer: null | any; // Define actual type if possible
            country_block: boolean;
            eimu_id: string;
            external_url: string | null;
            external_url_linkshimmed: string | null;
            edge_followed_by: {
                count: number;
            };
            fbid: string;
            followed_by_viewer: boolean;
            edge_follow: {
                count: number;
            };
            follows_viewer: boolean;
            full_name: string;
            group_metadata: null | any; // Define actual type if possible
            has_ar_effects: boolean;
            has_clips: boolean;
            has_guides: boolean;
            has_channel: boolean;
            has_blocked_viewer: boolean;
            highlight_reel_count: number;
            has_requested_viewer: boolean;
            hide_like_and_view_counts: boolean;
            id: string;
            is_business_account: boolean;
            is_professional_account: boolean;
            is_supervision_enabled: boolean;
            is_guardian_of_viewer: boolean;
            is_supervised_by_viewer: boolean;
            is_supervised_user: boolean;
            is_embeds_disabled: boolean;
            is_joined_recently: boolean;
            guardian_id: string | null;
            business_address_json: null | any; // Define actual type if possible
            business_contact_method: string;
            business_email: string | null;
            business_phone_number: string | null;
            business_category_name: string | null;
            overall_category_name: string | null;
            category_enum: string | null;
            category_name: string | null;
            is_private: boolean;
            is_verified: boolean;
            is_verified_by_mv4b: boolean;
            is_regulated_c18: boolean;
            edge_mutual_followed_by: {
                count: number;
                edges: any[]; // Define actual type if possible
            };
            pinned_channels_list_count: number;
            profile_pic_url: string;
            profile_pic_url_hd: string;
            requested_by_viewer: boolean;
            should_show_category: boolean;
            should_show_public_contacts: boolean;
            show_account_transparency_details: boolean;
            transparency_label: string | null;
            transparency_product: string;
            username: string;
            connected_fb_page: string | null;
            pronouns: string[]; // Define actual type if possible
            edge_felix_video_timeline: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string | null;
                };
                edges: any[]; // Define actual type if possible
            };
            edge_owner_to_timeline_media: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string;
                };
                edges: any[]; // Define actual type if possible
            };
            edge_saved_media: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string | null;
                };
                edges: any[]; // Define actual type if possible
            };
            edge_media_collections: {
                count: number;
                page_info: {
                    has_next_page: boolean;
                    end_cursor: string | null;
                };
                edges: any[]; // Define actual type if possible
            };
            edge_related_profiles: {
                edges: any[]; // Define actual type if possible
            };
        };
    };
    toast_content_on_load: string | null;
    show_qr_modal: boolean;
    show_view_shop: boolean;
}

const x = (username: string) => {
    const apiUrl = `https://www.instagram.com/${username}/?__a=1&__d=1`;
    fetch(apiUrl)
}

