module Jekyll
  module CacheBustFilter
    def bust_file_cache(input)
      input
    end

    def bust_css_cache(input)
      input
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBustFilter)
